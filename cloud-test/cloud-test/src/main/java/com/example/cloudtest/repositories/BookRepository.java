package com.example.cloudtest.repositories;

import com.example.cloudtest.entities.Book;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * BookingRepository
 */
public interface BookRepository extends JpaRepository<Book, Long> {

}