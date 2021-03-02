var submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
    document.title = "Employee Detail Page";
    var fname = document.getElementById('firstName').value.trim();
    var mname = document.getElementById('middleName').value.trim();
    var lname = document.getElementById('thirdName').value.trim();
    var dob = document.getElementById('dob').value;
    var phoneNo = document.getElementById('phoneNo').value.trim();
    var emailtxt = document.getElementById('emailtxt').value.trim();
    var relationship;
    var address1 = document.getElementById('address1').value.trim();
    var address2 = document.getElementById('address2').value.trim();
    var address3 = document.getElementById('address3').value.trim();
    var companyID = document.getElementById('companyID').value.trim();
    var positionTxt = document.getElementById('positionTxt').value.trim();
    var employeeID = document.getElementById('employeeID').value.trim();
    var deptTxt = document.getElementById('deptTxt').value.trim();
    var employmentType;
    var workMailTxt = document.getElementById('workMailTxt').value.trim();
    var workLocation = document.getElementById('workLocation').value.trim();
    var workPhoneTxt = document.getElementById('workPhoneTxt').value.trim();
    var startDate = document.getElementById('startDate').value;
    var bank_name = document.getElementById('bank_name').value.trim();
    var branch_name = document.getElementById('branch_name').value.trim();
    var bank_add1 = document.getElementById('bank_add1').value.trim();
    var bank_add2 = document.getElementById('bank_add2').value.trim();
    var bank_add3 = document.getElementById('bank_add3').value.trim();
    var account = document.getElementById('account').value.trim();
    var ifsc_code = document.getElementById('ifsc_code').value.trim();
    var holder_name = document.getElementById('holder_name').value.trim();
    var account_type;
    var EnameTxt1 = document.getElementById('EnameTxt1').value.trim();
    var EnameTxt2 = document.getElementById('EnameTxt2').value.trim();
    var EnameTxt3 = document.getElementById('EnameTxt3').value.trim();
    var EphoneTxt = document.getElementById('EphoneTxt').value.trim();
    var Eaddress1 = document.getElementById('Eaddress1').value.trim();
    var Eaddress2 = document.getElementById('Eaddress2').value.trim();
    var Eaddress3 = document.getElementById('Eaddress3').value.trim();
    var Erelationship = document.getElementById('Erelationship').value.trim();
    var gender;
    if (document.getElementsByName('gender')[0].checked == true)
        gender = "Male";
    else if (document.getElementsByName('gender')[1].checked == true)
        gender = "Female";
    for (let i = 1; i < 5; i++)
        if (document.getElementById('employmentType').selectedIndex === i)
            employmentType = document.getElementById('employmentType')[i].value;
    for (let i = 1; i < 8; i++)
        if (document.getElementById('relationship').selectedIndex === i)
            relationship = document.getElementById('relationship')[i].value;
    for (let i = 1; i < 7; i++)
        if (document.getElementById('account_type').selectedIndex === i)
            account_type = document.getElementById('account_type')[i].value;
    var signup = document.getElementById('signup');
    signup.style.cssText = 'display: none;';
    var details = document.getElementById('details');
    details.style.cssText = 'display: block;';
    if (fname.length !== 0||mname.length!==0||lname.length!==0) {
        var user_name = document.getElementById('user_name');
        user_name.innerText = fname + " " + mname + " " + lname;
        var first_name = document.getElementById('first_name');
        first_name.innerText = fname + " " + mname + " " + lname;
    }
    if (positionTxt.length !== 0) {
        var user_position = document.getElementById('user_position');
        user_position.innerText = positionTxt;
        var position = document.getElementById('position');
        position.innerText = positionTxt;
    }
    if (employmentType !== undefined) {
        var type_of_employment = document.getElementById('type_of_employment');
        type_of_employment.innerText = employmentType;
        var type = document.getElementById('type');
        type.innerText = employmentType;
    }
    if(workPhoneTxt.length !==0) {
        var work_phone = document.getElementById('work_phone');
        work_phone.innerText = workPhoneTxt;
        var work_phone1 = document.getElementById('work_phone1');
        work_phone1.innerText = workPhoneTxt;
    }
    if(workMailTxt.length !==0) {
        var work_email = document.getElementById('work_email');
        work_email.innerText = workMailTxt;
        var work_email1 = document.getElementById('work_email1');
        work_email1.innerText = workMailTxt;
    }
    if(gender !== undefined) {
        var gender1 = document.getElementById('gender');
        gender1.innerText = gender;
    }
    if(dob.length !== 0) {
        var dob1 = document.getElementById('dob1');
        dob1.innerText = dob;
    }
    if(address1.length!==0 || address3.length!==0||address2.length!==0) {
        var address = document.getElementById('address');
        address.innerText = address1+" , "+address2+" , "+address3;
    }
    if(relationship !== undefined) {
        var marital_status = document.getElementById('marital_status');
        marital_status.innerText = relationship;
    }
    if(phoneNo.length!==0) {
        var user_phone = document.getElementById('user_phone');
        user_phone.innerText = phoneNo;
    }
    if(emailtxt.length!==0) {
        var user_email = document.getElementById('user_email');
        user_email.innerText = emailtxt;
    }
    if(companyID.length!==0) {
        var cmp_id = document.getElementById('cmp_id');
        cmp_id.innerText = companyID;
    }
    if(employeeID.length!==0) {
        var emp_id = document.getElementById('emp_id');
        emp_id.innerText = employeeID;
    }
    if(deptTxt.length!==0) {
        var deptTxt1 = document.getElementById('deptTxt1');
        deptTxt1.innerText = deptTxt;
    }
    if(workLocation.length!==0) {
        var location = document.getElementById('location');
        location.innerText = workLocation;
    }
    if(startDate.length!==0) {
        var date = document.getElementById('date');
        date.innerText = startDate;
    }
    if(bank_name.length!==0) {
        var bank_name1 = document.getElementById('bank_name1');
        bank_name1.innerText = bank_name;
    }
    if(branch_name.length!==0) {
        var branch_name1 = document.getElementById('branch_name1');
        branch_name1.innerText = branch_name;
    }
    if(bank_add1.length!==0||bank_add2.length!==0||bank_add3.length!==0) {
        var address1 = document.getElementById('address1');
        address1.innerText = bank_add1+" , "+bank_add2+" , "+bank_add3;
    }
    if(account.length!==0) {
        var account1 = document.getElementById('account1');
        account1.innerText = account;
    }
    if(ifsc_code.length!==0) {
        var ifsc_code1 = document.getElementById('ifsc_code1');
        ifsc_code1.innerText = ifsc_code;
    }
    if(holder_name.length!==0) {
        var holder_name1 = document.getElementById('holder_name1');
        holder_name1.innerText = holder_name;
    }
    if(account_type!==undefined) {
        var type1 = document.getElementById('type1');
        type1.innerText = account_type;
    }
    if(EnameTxt1.length!==0||EnameTxt2.length!==0||EnameTxt3.length!==0) {
        var emg_name = document.getElementById('emg_name');
        emg_name.innerText = EnameTxt1+" "+EnameTxt2+" "+EnameTxt3;
    }
    if(Eaddress1.length!==0||Eaddress2.length!==0||Eaddress3.length!==0) {
        var eaddress = document.getElementById('eaddress');
        eaddress.innerText = Eaddress1+" , "+Eaddress2+" , "+Eaddress3;
    }
    if(EphoneTxt.length!==0) {
        var phone = document.getElementById('phone');
        phone.innerText = EphoneTxt;
    }
    if(Erelationship.length!==0) {
        var relation = document.getElementById('relation');
        relation.innerText = Erelationship;
    }
})

