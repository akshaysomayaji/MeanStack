

var GenericHelper = function () {

    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    this.getFormattedDate = function (val) {
        var result = "";

        var month = val.getMonth();
        var day = val.getDate();
        var year = val.getFullYear();
        result = day + "-" + monthNames[month] + "-" + year

        return result;
    }

};


var commonNotification = function () {

    this.authetication_notification_message = function (Code) {
        switch (Code) {
            case "Auth001": return "Invalid user name. Please check and retry.";
            case "Auth002": return "Invalid password. Please check and retry.";
            case "Auth003": return "Maximum attempts (5) reached. Your account is locked. Please get in touch with the admin to unlock account.";
            case "Auth004": return "Invalid user name or Invalid password. Please check and retry.";
            case "Auth005": return "Invalid Email Id. Please check and retry.";
            case "SMS001": return "Login Activity";
            case "SMS002": return "<div><p>Dear Sir/Madam, " +
                        "<br/> A successfull login into your GST Account #email#. on GST platform happened on: <br/>" + new Date().toString() + "</p>" +
                        "<br><br><p>Please call the helpline (+91 xxxxx yyyyy) if you did not login </p>" +
                        "<br><p>Regards,</p>" +
                        "<br><p>Support Team</p>" +
                        "</div>";
            case "SMS003": return "An unsuccessful attempt was made to login into your GST account #email#. Please call the helpline (+91 xxxxx yyyyy) if you did not try to login.";
            default: return Code;
        }
    }

    this.getUser_notification_message = function (Code) {
        switch (Code) {
            //User Common notification
            case "User001": return "Given Email Id already exists. Please change the Email Id and try again.";
            case "User002": return "User already has the given role. Please check and try again with a different role.";
            case "User003": return "User added successfully.";
            case "User004": return "User updated successfully.";
            case "User005": return "User reset successfully.";
            case "User006": return "User unlocked successfully.";
            case "User007": return "User deactivated successfully.";
            case "User008": return "User to role mapping successful.";
            case "User009": return "User role removed successfully.";
            case "User010": return "Given Mail Id is already mapped to another user. Please change and retry.";
            case "User011": return "Gstin is successfully mapped to user.";
            case "User012": return "Failed to add user's, please check and try again.";
            case "User013": return "Otp sent your registered email address successfully.";
            case "User014": return "Fail to send to OTP.";
            default: return Code;
        }
    }
    

    this.getSales_notification_message = function (Code) {
        switch (Code) {
            case "Sales001": return "Sales invoice added successfully.";
            case "Sales002": return "Given invoice number is already exists, please change the invoice number, and try again.";
            case "Sales003": return "Sales invoices uploaded successfully.";
            case "Sales004": return "Sales invoice deleted successfully.";
            case "Sales005": return "Sales invoice updated successfully.";
            case "Sales006": return "Failed to add sales invoice, please try again.";
            case "Sales007": return "Failed to update sales invoice, please try again.";
            case "Sales008": return "Failed to delete sales invoice, please try again.";
            case "Sales009": return "Some thing went wrong, please try again.";
            default: return Code;
        }
    }

    this.getmail_contents = function (Code) {
        switch (Code) {
            case "MAIL001": return "Account Creation";
            case "MAIL002": return '<div style="width:98%;height:98%;" class="email-tmpl"><div style="border:1px solid;padding:8px;" class="email-tmpl-box"><div align="left" class="em-logo"><img src="#clientConfigObj.image#" /></div><div class="em-text"><p>Dear #firstname# #lastname#,<br/><br/><br/> Your Account Has been created for #clientConfigObj.name#.<br/> Please use the following PIN:<b> #rand# </b> to Activate your account While Login.<br />Click <a href="  #clientConfigObj.url# #!/Activate">Here</a> To Activate <br /><br /></p><p align="left"> #clientConfigObj.name# Team</p></div></div><p align="center">This email has been generated automatically by #clientConfigObj.name# as part of your request to reset password at #clientConfigObj.url# website.Note: Kindly do not reply to this mail. This mail was sent automatically from our server.</p></div>';
            case "MAIL003": return '<div style="width:98%;height:98%;" class="email-tmpl"><div style="border:1px solid;padding:8px;" class="email-tmpl-box"><div align="left" class="em-logo"><img src="#clientConfigObj.image#" /></div><div class="em-text"><p>Dear #firstname#,<br/><br/><br/> Your Account Has been created for #clientConfigObj.name#.<br/> Please use User Name as <b> #email# </b> and Password as <b> #autogenpassword# </b> to login and activate your account.<br />Click  <a href=#serverUrl##!/login">here</a> to activate. <br /><br /></p><p align="left"> #clientConfigObj.name# Team</p></div></div><br/>  <p align="center">This email has been generated automatically by #clientConfigObj.name#. <br/> Note: Kindly do not reply to this mail. This mail was sent automatically from our server.</p></div>';

        }
    }


    this.getGSTIN_notification_message = function (Code) {
        switch (Code) {
            case "gstin001": return "Gstin added successfully.";
            case "gstin002": return "Given gstin already exists, please change the gstin, and try again.";
            case "gstin003": return "Gstin's added successfully.";
            case "gstin004": return "Gstin deleted successfully.";
            case "gstin005": return "Gstin updated successfully.";
            case "gstin006": return "Failed to add gstin, please try again.";
            case "gstin007": return "Failed to update gstin, please try again.";
            case "gstin008": return "Failed to delete gstin, please try again.";
            case "gstin009": return "Some thing went wrong, please try again.";
            default: return Code;
        }
    }


    this.getBusiness_notification_message = function (Code) {
        switch (Code) {
            case "business001": return "Business details (PAN) added successfully.";
            case "business002": return "Given pan already exists, please change the pan, and try again.";
            case "business003": return "PAN's (Business details) added successfully.";
            case "business004": return "Business details (PAN) deleted successfully.";
            case "business005": return "Business details (PAN) updated successfully.";
            case "business006": return "Failed to add Business details (PAN), please try again.";
            case "business007": return "Failed to update Business details (PAN), please try again.";
            case "business008": return "Failed to delete Business details (PAN), please try again.";
            case "business009": return "Some thing went wrong, please try again.";
            default: return Code;
        }
    }

}

exports.GenericHelper = GenericHelper;
exports.commonNotification = commonNotification;