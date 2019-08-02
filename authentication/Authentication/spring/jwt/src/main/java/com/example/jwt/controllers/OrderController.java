package com.example.jwt.controllers;

import com.example.jwt.entities.Order;
import com.example.jwt.entities.User;
import com.example.jwt.repositories.OrderRepository;
import com.example.jwt.security.CustomUserDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

  @Autowired
  // private UserRepository userRepository;
  private OrderRepository orderRepository;

  private CustomUserDetailsService userDetailsService;

  @PostMapping(value = "/orders")
  public Order saveOrder(@RequestBody Order order) {

    User user = userDetailsService.getCurrentUser();
    order.setUser(user);
    orderRepository.save(order);
    return order;
  }

}