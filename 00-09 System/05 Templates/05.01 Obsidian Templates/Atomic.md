
<%*  
  let title = tp.file.title  
  if (title.startsWith("Untitled")) {  
	title = await tp.system.prompt("Title");  
	await tp.file.rename(title);  
  }
  tR = "---\n"
  tR += "class: Atomic\n"
  tR += "---\n"
%>

