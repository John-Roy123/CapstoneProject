package com.capstone.john;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class GameController {

        //maps URL requests to specific HTML pages
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

        @RequestMapping("/account")
        public String account(){ return "account";}
        @RequestMapping("/account/**")
        public String findAccount(){ return "account";}
}
