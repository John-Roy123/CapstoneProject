

@Controller
public class AppController{

    @RequestMapping("/")
    public String landing(){
        return "landing";
    }
    @RequestMapping("/Questions")
    public String questions(){
        return "questions";
    }

}