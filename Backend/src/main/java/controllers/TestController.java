package controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class TestController {

    @RequestMapping("/test")
    public String returnHello(){
        return "Hello World!";
    }
}
