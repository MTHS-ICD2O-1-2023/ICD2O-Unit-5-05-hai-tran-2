// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * this function find type of triangle
 */

function findTriangleType() {
  // input
  const lengthA = document.getElementById("length-a").value
  const lengthB = document.getElementById("length-b").value
  const lengthC = document.getElementById("length-c").value

  // process
  const angleA = Math.acos((lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)) * (180 / Math.PI)
  const angleB = Math.acos((lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)) * (180 / Math.PI)
  const angleC = Math.acos((lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)) * (180 / Math.PI)

  const sumOfAngles = Number((angleA).toFixed(2)) + Number((angleB).toFixed(2)) + Number((angleC).toFixed(2))

  if ( sumOfAngles == 180){
    if ((angleA == angleB) && (angleB == angleC) && (angleC == angleA)) {
      // output
      document.getElementById("result").innerHTML = "This is a Equilateral Triangle"
    } else if ((angleA == angleB) || (angleB == angleC) || (angleC == angleA)) {
      // output
      document.getElementById("result").innerHTML = "This is a Isosceles Triangle"
    } else {
      // output
      document.getElementById("result").innerHTML = "This is a Scalene Triangle"
    }
  } else {
    // output
    document.getElementById("result").innerHTML = "This is not a triangle"
  }
} 