package com.example.jwt.controllers;

import com.example.jwt.entities.User;
import com.example.jwt.security.CustomUserDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * TestController
 */
@RestController
public class TestController {

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @GetMapping(value = "/restricted")
    public String restricted() {
        return "{\"message\": \"This is restricted\"}";
    }

    @GetMapping(value = "/public")
    public String testPublic() {
        return "{\"message\": \"This is public\"}";
    }

    @GetMapping(value = "/currentUser")
    public User currentUser() {
        return userDetailsService.getCurrentUser();
    }

    @GetMapping(value = "/testing")
    public String testTestricted() {
        return "{\"message\": \"This is restricted testing\"}";
    }

    @GetMapping(value = "/testing2")
    public String testTestingPublic() {
        return "{\"message\": \"This is public testing\"}";
    }
}