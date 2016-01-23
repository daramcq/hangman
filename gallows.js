var gallows = (function(){

    var first = "  ____ \n"  + 
                " |    \n"  + 
                " |     \n"  + 
                " |     \n" +
                " |     \n" + 
                " |__";
    var second = "  ____\n"  + 
                 " |  |  \n"  + 
                 " |     \n"  + 
                 " |     \n" +
                 " |     \n" + 
                 " |__";
    
    var third =  "  ____\n"  + 
                 " |  |  \n"  + 
                 " |  0   \n"  + 
                 " |     \n" +
                 " |     \n" + 
                 " |__";
    
    var fourth = "  ____\n"  + 
                 " |  |  \n"  + 
                 " |  0  \n"  + 
                 " | /|\\  \n" +
                 " |     \n" + 
                 " |__";
 
    var fifth = "  ____\n"  + 
                " |  | \n"  + 
                " |  0 \n"  + 
                " | /|\\ \n" +
                " | / \\ \n" + 
                " |__";

    var sixth = " ____\n"  + 
               " |  | \n"  + 
               " |  0 \n"  + 
               " | \\|\\ \n" +
               " | \\ \\ \n" + 
               " |__";

    var seventh = "  ____\n"  + 
                  " |  | \n"  + 
                  " |  0 \n"  + 
                  " | /|/ \n" +
                  " | / / \n" + 
                  " |__";
        
    return { stages : [first, second, third, fourth, fifth ],
	     spasms : [fifth, sixth, seventh] }
})();