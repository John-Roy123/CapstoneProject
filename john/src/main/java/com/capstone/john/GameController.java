package com.capstone.john;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class GameController {


        @RequestMapping("/")
        public String landing(){
            return "landing";
        }

        @RequestMapping("/login")
        public String login(){
            return "login";
        }

        @RequestMapping("/leaderboard")
        public String leaderboard(){return "leaderboard";}

        @RequestMapping("/game")
        public String index(){
        return "game";
}
}
