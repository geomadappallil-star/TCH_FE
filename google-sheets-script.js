/**
 * TCH Support Services - Google Sheet Webhook Sync
 * 
 * Google Sheet: https://docs.google.com/spreadsheets/d/1zLqNOia5uyvDqMwecC_0zTN5hDYTzY8cyDCpWwIylVs/edit
 * 
 * QUICK 1-MINUTE SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet in browser:
 *    https://docs.google.com/spreadsheets/d/1zLqNOia5uyvDqMwecC_0zTN5hDYTzY8cyDCpWwIylVs/edit
 * 2. In the top menu, click: Extensions > Apps Script
 * 3. Delete any default code in Code.gs, paste this entire file, and click Save (disk icon).
 * 4. Click the blue "Deploy" button (top right) > "New deployment".
 * 5. Click the gear icon next to "Select type" and choose "Web app".
 * 6. Set:
 *    - Description: TCH Referral & Callback Sync
 *    - Execute as: Me (your Google account)
 *    - Who has access: Anyone
 * 7. Click "Deploy", click "Authorize access", sign in and click "Advanced > Go to Untitled project (unsafe)" to grant permissions.
 * 8. Copy the "Web app URL" (looks like https://script.google.com/macros/s/AKfycb.../exec).
 * 9. Paste this URL into:
 *    - frontend/.env or Vercel Environment Variables: GOOGLE_SHEET_WEBHOOK_URL
 *    - backend/.env: GOOGLE_SHEET_WEBHOOK_URL
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 30 seconds for other processes to finish
  lock.tryLock(30000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse incoming payload (supports both JSON body and Form urlencoded)
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var headers = [
      "Timestamp (AEST)",
      "Reference ID",
      "Client Name",
      "Phone",
      "Email",
      "Townsville Suburb",
      "Service Required",
      "Enquiry Type",
      "Client Message / Notes"
    ];

    // If sheet is completely empty or row 1 is blank, add styled headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      
      // Style header row with TCH brand colors
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#2D6A5D"); // TCH Eucalyptus Green
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      headerRange.setFontFamily("Arial");
      headerRange.setFontSize(11);
      headerRange.setHorizontalAlignment("center");
      
      // Freeze header row
      sheet.setFrozenRows(1);
    }

    // Format AEST Brisbane timestamp
    var timestamp = data.timestamp || Utilities.formatDate(new Date(), "Australia/Brisbane", "dd/MM/yyyy HH:mm:ss");
    var refId = data.referenceId || ("TCH-" + Math.floor(100000 + Math.random() * 900000));

    // Append referral / callback row
    sheet.appendRow([
      timestamp,
      refId,
      data.name || "",
      data.phone || "",
      data.email || "",
      data.suburb || "",
      data.service || data.serviceRequired || "General Enquiry",
      data.enquiryType || "Website Callback",
      data.message || ""
    ]);

    var lastRow = sheet.getLastRow();
    
    // Format the new data row
    var dataRange = sheet.getRange(lastRow, 1, 1, headers.length);
    dataRange.setFontFamily("Arial");
    dataRange.setFontSize(10);
    dataRange.setVerticalAlignment("middle");
    
    // Highlight phone number and reference ID for quick scanning
    sheet.getRange(lastRow, 2).setFontWeight("bold").setFontColor("#2D6A5D");
    sheet.getRange(lastRow, 4).setFontWeight("bold");

    // Auto-fit column widths
    for (var col = 1; col <= headers.length; col++) {
      sheet.autoResizeColumn(col);
    }

    return ContentService
      .createTextOutput(JSON.stringify({
        status: "success",
        message: "Referral recorded successfully",
        referenceId: refId,
        row: lastRow
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error",
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var totalRows = Math.max(0, sheet.getLastRow() - 1);
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "ready",
      service: "TCH Support Services Google Sheet Sync",
      spreadsheetName: SpreadsheetApp.getActiveSpreadsheet().getName(),
      totalReferrals: totalRows
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
