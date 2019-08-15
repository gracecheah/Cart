package com.example.cloudtest.controller;

import com.example.cloudtest.repositories.BookRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.cloudtest.configuration.Config;
import com.example.cloudtest.entities.Book;

@RestController
public class PublicController {

  @Autowired
  private BookRepository bookRepository;

  @Value("${admin.message}")
  public String adminMessage;

  @Autowired
  public Config loadedConfig;

  @GetMapping(value = "/")
  public String test() {
    return "{\"message\": \"testdddss\"}";
  }

  @GetMapping(value = "/books")
  public List<Book> displayBooks() {
    return bookRepository.findAll();
  }

  @GetMapping(value = "/message")
  public Map<String, String> message() {
    Map<String, String> data = new HashMap<>();
    data.put("adminMessage", adminMessage);
    data.put("welcomeMessage", loadedConfig.welcomeMessage());
    data.put("goodbyeMessage", loadedConfig.goodbyeMessage());
    data.put("adminPassword", loadedConfig.adminPassword());
    data.put("bankAcc", loadedConfig.bankAcc());
    data.put("bankPass", loadedConfig.bankPass());

    return data;
  }

}