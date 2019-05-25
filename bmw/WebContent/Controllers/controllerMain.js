//==controller=====
//--user----
//--login---


$(document).on("click","#btnLogin",function()
{
	var result =isValidFormLogin();
	if(result == "true")
	{  $("#formLogin").submit(); }
	
	else
		{
		$("#divStsMsgLogin").html(result);
		}
	
	
	
});

//===client-model===
//--user---

function isValidFormLogin()
{
	if($.trim($("#txtUserName").val())=="")
		{ return "Enter Username"; }

     if($.trim($("#txtPassword").val())=="")
     { return "Enter Password";}
     return "true";
}

function isValidFormItem()
{ 
	if($.trim($("#txtItemName").val())=="")
	{ return "Enter Item name"; }
	
	
	if($.trim($("#txtItemDesc").val())=="")
    { return "Enter Item Description";}
		 
		return "true"; 
}

//--item--
//---save/update---

$(document).on("click","#btnSave",function()
{
	
   var result = isValidFormItem();
   if(result == "true")
	   { $("#formItems").submit();}
   else
	   {$("#divStsMsgItem").html(result);}

});


//---Edit----

$(document).on("click","#btnEdit", function()
{
	$("#hidMode").val("update");
	$("#hidID").val($(this).attr("param"));
	$("#txtItemName").val($(this).closest("tr").find(`td:eq(1)`).text());
	$("#txtItemDesc").val($(this).closest("tr").find(`td:eq(2)`).text());

});

//--remove---
$(document).on("click","#btnRemove", function()
{
	
   $("#hidMode").val("remove");
   $("#hidID").val($(this).attr("param"));
   var res = confirm("Are you sure?");
    if (res == true){
    	$("#formItems").submit();
    }

});












