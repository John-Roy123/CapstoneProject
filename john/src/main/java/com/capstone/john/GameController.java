package com.capstone.john;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class GameController {


        @RequestMapping("/")
        public String landing(){
            return "landing";
        }


    @RequestMapping("/game")
    public String index(){
        return "game";
}
}
