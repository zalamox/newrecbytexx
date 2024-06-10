module.exports = async (clientr) => {
    let array = [
  
      {
        name: "auto",
        description: "get new developer badge",
        
      },
      {
        name: "button",
        description: "get new developer badge",
        
      },
   
    ];
    await clientr.application.commands.set(array);
  }