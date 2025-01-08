package com.biometric.reactnative.backend.biometric.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/v1/setup")
@RestController
public class BiometricController {

    @PostMapping("/signup")
    public ResponseEntity<String> signup(){
        return ResponseEntity.ok("This user has signed up");
    }

    @GetMapping("/login")
    public ResponseEntity<String> login(){
        return ResponseEntity.ok("This user has logged in");
    }
}
