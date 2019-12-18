import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

const matches: string[][] = [
  ['Vegard', 'Trond', 'Ole Kristian', 'Sverre'],
  ['Are', 'Joar', 'Morten', 'Magnus'],
  ['Øystein', 'Vegard', 'Ole Kristian', 'Sverre'],
  ['Morten', 'Magnus', 'Svein Erik', 'Trond'],
  ['Are', 'Sverre', 'Kjetil L', 'Magnus'],
  ['Trond', 'Morten', 'Svein Erik', 'Vegard'],
  ['Kjetil L', 'Magnus', 'Are', 'Sverre'],
  ['Trond', 'Joar', 'Øystein', 'Morten'],
  ['Øystein', 'Svein Erik', 'Magnus', 'Joar'],
  ['Ole Kristian', 'Kjetil L', 'Are', 'Morten'],
  ['Ole Kristian', 'Kjetil L', 'Vegard', 'Morten'],
  ['Svein Erik', 'Sverre', 'Trond', 'Are'],
  ['Øystein', 'Svein Erik', 'Kjetil L', 'Sverre'],
  ['Joar', 'Trond', 'Are', 'Morten'],
  ['Kjetil L', 'Joar', 'Trond', 'Svein Erik'],
  ['Morten', 'Øystein', 'Vegard', 'Magnus'],
  ['Svein Erik', 'Magnus', 'Joar', 'Morten'],
  ['Vegard', 'Ole Kristian', 'Magnus', 'Morten'],
  ['Vegard', 'Are', 'Morten', 'Sverre'],
  ['Kjetil L', 'Joar', 'Ole Kristian', 'Mads'],
  ['Marco', 'Mads', 'Svein Erik', 'Are'],
  ['Øystein', 'Joar', 'Ole Kristian', 'Vegard'],
  ['Vegard', 'Ole Kristian', 'Are', 'Kjetil L'],
  ['Mads', 'Magnus', 'Marco', 'Joar'],
  ['Øystein', 'Marco', 'Are', 'Vegard'],
  ['Magnus', 'Joar', 'Svein Erik', 'Øystein'],
  ['Øystein', 'Kjetil L', 'Are', 'Vegard'],
  ['Magnus', 'Mads', 'Ole Kristian', 'Joar'],
  ['Ole Kristian', 'Sverre', 'Øystein', 'Magnus'],
  ['Vegard', 'Joar', 'Svein Erik', 'Magnus'],
  ['Øystein', 'Kjetil L', 'Joar', 'Vegard'],
  ['Ole Kristian', 'Mads', 'Svein Erik', 'Sverre'],
  ['Magnus', 'Øystein', 'Are', 'Svein Erik'],
  ['Joar', 'Morten', 'Magnus', 'Svein Erik'],
  ['Are', 'Morten', 'Vegard', 'Svein Erik'],
  ['Joar', 'Sverre', 'Øystein', 'Trond'],
  ['Svein Erik', 'Vegard', 'Ole Kristian', 'Joar'],
  ['Magnus', 'Trond', 'Are', 'Øystein'],
  ['Magnus', 'Joar', 'Svein Erik', 'Kjetil L'],
  ['Are', 'Sverre', 'Øystein', 'Trond'],
  ['Vegard', 'Øystein', 'Are', 'Ole Kristian'],
  ['Trond', 'Morten', 'Joar', 'Svein Erik'],
  ['Vegard', 'Øystein', 'Svein Erik', 'Joar'],
  ['Are', 'Sverre', 'Ole Kristian', 'Mads'],
  ['Vegard', 'Magnus', 'Joar', 'Morten'],
  ['Ole Kristian', 'Trond', 'Mads', 'Svein Erik'],
  ['Vegard', 'Joar', 'Ole Kristian', 'Øystein'],
  ['Svein Erik', 'Magnus', 'Morten', 'Trond'],
  ['Joar', 'Sverre', 'Vegard', 'Ole Kristian'],
  ['Mads', 'Svein Erik', 'Trond', 'Morten'],
  ['Are', 'Morten', 'Vegard', 'Magnus'],
  ['Trond', 'Øystein', 'Svein Erik', 'Joar'],
  ['Vegard', 'Sverre', 'Svein Erik', 'Are'],
  ['Magnus', 'Trond', 'Øystein', 'Morten'],
  ['Marco', 'Trond', 'Ole Kristian', 'Morten'],
  ['Are', 'Øystein', 'Vegard', 'Joar'],
  ['Vegard', 'Joar', 'Kjetil L', 'Morten'],
  ['Are', 'Sverre', 'Mads', 'Ole Kristian'],
  ['Ole Kristian', 'Trond', 'Marco', 'Vegard'],
  ['Joar', 'Are', 'Øystein', 'Morten'],
  ['Ole Kristian', 'Øystein', 'Vegard', 'Morten'],
  ['Are', 'Kjetil L', 'Trond', 'Joar'],
  ['Øystein', 'Joar', 'Are', 'Svein Erik'],
  ['Ole Kristian', 'Trond', 'Svein Erik', 'Are'],
  ['Are', 'Øystein', 'Magnus', 'Kjetil L'],
  ['Joar', 'Ole Kristian', 'Morten', 'Mads'],
  ['Magnus', 'Øystein', 'Svein Erik', 'Joar'],
  ['Morten', 'Are', 'Ole Kristian', 'Trond'],
  ['Trond', 'Sverre', 'Svein Erik', 'Mads'],
  ['Ole Kristian', 'Are', 'Morten', 'Joar'],
  ['Magnus', 'Are', 'Kjetil L', 'Marco'],
  ['Øystein', 'Svein Erik', 'Joar', 'Morten'],
  ['Øystein', 'Sverre', 'Are', 'Svein Erik'],
  ['Joar', 'Vegard', 'Kjetil L', 'Morten'],
  ['Are', 'Trond', 'Svein Erik', 'Øystein'],
  ['Are', 'Vegard', 'Morten', 'Kjetil L'],
  ['Øystein', 'Vegard', 'Magnus', 'Joar'],
  ['Are', 'Kjetil L', 'Magnus', 'Øystein'],
  ['Kjetil L', 'Marco', 'Vegard', 'Øystein'],
  ['Are', 'Joar', 'Svein Erik', 'Trond'],
  ['Joar', 'Vegard', 'Sverre', 'Svein Erik'],
  ['Trond', 'Joar', 'Vegard', 'Svein Erik'],
  ['Kjetil L', 'Mads', 'Are', 'Øystein'],
  ['Kjetil L', 'Magnus', 'Marco', 'Vegard'],
  ['Are', 'Mads', 'Svein Erik', 'Joar'],
  ['Vegard', 'Trond', 'Svein Erik', 'Sverre'],
  ['Are', 'Mads', 'Kjetil L', 'Morten'],
  ['Joar', 'Vegard', 'Kjetil L', 'Marco'],
  ['Svein Erik', 'Trond', 'Are', 'Magnus'],
  ['Are', 'Kjetil L', 'Trond', 'Magnus'],
  ['Vegard', 'Joar', 'Svein Erik', 'Sverre'],
  ['Joar', 'Kjetil L', 'Trond', 'Vegard'],
  ['Mads', 'Are', 'Morten', 'Svein Erik'],
  ['Kjetil L', 'Are', 'Vegard', 'Morten'],
  ['Mads', 'Trond', 'Svein Erik', 'Joar'],
  ['Øystein', 'Kjetil L', 'Mads', 'Sverre'],
  ['Vegard', 'Joar', 'Trond', 'Morten'],
  ['Kjetil L', 'Joar', 'Øystein', 'Marco'],
  ['Trond', 'Vegard', 'Mads', 'Sverre'],
  ['Svein Erik', 'Magnus', 'Kjetil L', 'Joar'],
  ['Øystein', 'Morten', 'Trond', 'Are'],
  ['Magnus', 'Sverre', 'Vegard', 'Joar'],
  ['Mads', 'Kjetil L', 'Øystein', 'Are'],
  ['Svein Erik', 'Vegard', 'Morten', 'Trond'],
  ['Magnus', 'Øystein', 'Are', 'Joar'],
  ['Svein Erik', 'Joar', 'Vegard', 'Morten'],
  ['Mads', 'Øystein', 'Kjetil L', 'Are'],
  ['Magnus', 'Joar', 'Morten', 'Svein Erik'],
  ['Kjetil L', 'Vegard', 'Are', 'Øystein'],
  ['Joar', 'Vegard', 'Øystein', 'Magnus'],
  ['Kjetil L', 'Trond', 'Morten', 'Sverre'],
  ['Mads', 'Sverre', 'Vegard', 'Joar'],
  ['Øystein', 'Morten', 'Magnus', 'Joar'],
  ['Øystein', 'Joar', 'Marco', 'Sverre'],
  ['Mads', 'Vegard', 'Trond', 'Morten'],
  ['Joar', 'Morten', 'Mads', 'Marco'],
  ['Vegard', 'Sverre', 'Trond', 'Øystein'],
  ['Joar', 'Trond', 'Morten', 'Sverre'],
  ['Mads', 'Vegard', 'Øystein', 'Morten'],
  ['Morten', 'Trond', 'Mads', 'Marco'],
  ['Vegard', 'Øystein', 'Magnus', 'Joar'],
  ['Trond', 'Joar', 'Vegard', 'Mads'],
  ['Øystein', 'Morten', 'Joar', 'Vegard'],
  ['Magnus', 'Sverre', 'Joar', 'Vegard'],
  ['Magnus', 'Are', 'Marco', 'Vegard'],
  ['Joar', 'Sverre', 'Øystein', 'Mads'],
  ['Magnus', 'Kjetil L', 'Trond', 'Morten'],
  ['Øystein', 'Joar', 'Trond', 'Morten'],
  ['Trond', 'Sverre', 'Øystein', 'Magnus'],
  ['Vegard', 'Morten', 'Kjetil L', 'Joar'],
  ['Øystein', 'Morten', 'Marco', 'Vegard'],
  ['Trond', 'Magnus', 'Morten', 'Sverre'],
  ['Øystein', 'Magnus', 'Marco', 'Joar'],
  ['Vegard', 'Trond', 'Morten', 'Sverre'],
  ['Øystein', 'Marco', 'Magnus', 'Sverre'],
  ['Vegard', 'Trond', 'Morten', 'Joar'],
  ['Joar', 'Sverre', 'Trond', 'Marco'],
  ['Øystein', 'Magnus', 'Vegard', 'Morten'],
  ['Trond', 'Sverre', 'Øystein', 'Marco'],
  ['Joar', 'Vegard', 'Morten', 'Magnus'],
  ['Øystein', 'Morten', 'Joar', 'Vegard'],
  ['Trond', 'Sverre', 'Øystein', 'Morten'],
  ['Øystein', 'Marco', 'Trond', 'Joar'],
  ['Vegard', 'Sverre', 'Joar', 'Morten'],
  ['Marco', 'Joar', 'Øystein', 'Magnus'],
  ['Trond', 'Sverre', 'Vegard', 'Morten'],
  ['Øystein', 'Morten', 'Magnus', 'Vegard'],
  ['Joar', 'Sverre', 'Øystein', 'Morten'],
  ['Øystein', 'Sverre', 'Trond', 'Marco'],
  ['Vegard', 'Morten', 'Magnus', 'Joar'],
  ['Mads', 'Trond', 'Øystein', 'Kjetil L'],
  ['Svein Erik', 'Trond', 'Mads', 'Marco'],
  ['Øystein', 'Morten', 'Trond', 'Svein Erik'],
  ['Svein Erik', 'Trond', 'Mads', 'Kjetil L'],
  ['Øystein', 'Morten', 'Kjetil L', 'Svein Erik'],
  ['Trond', 'Øystein', 'Kjetil L', 'Svein Erik'],
  ['Trond', 'Mads', 'Øystein', 'Svein Erik'],
  ['Kjetil L', 'Morten', 'Trond', 'Mads'],
  ['Kjetil L', 'Trond', 'Øystein', 'Svein Erik'],
  ['Øystein', 'Morten', 'Svein Erik', 'Mads'],
  ['Kjetil L', 'Trond', 'Øystein', 'Morten'],
  ['Morten', 'Trond', 'Kjetil L', 'Svein Erik'],
  ['Marco', 'Morten', 'Trond', 'Martin V'],
  ['Kjetil L', 'Svein Erik', 'Martin V', 'Morten'],
  ['Svein Erik', 'Vegard', 'Martin V', 'Mads'],
  ['Trond', 'Martin V', 'Svein Erik', 'Morten'],
  ['Trond', 'Mads', 'Kjetil L', 'Morten'],
  ['Kjetil L', 'Morten', 'Svein Erik', 'Vegard'],
  ['Vegard', 'Morten', 'Trond', 'Kjetil L'],
  ['Kjetil L', 'Svein Erik', 'Trond', 'Morten'],
  ['Kjetil L', 'Trond', 'Svein Erik', 'Mads'],
  ['Morten', 'Vegard', 'Kjetil L', 'Trond'],
  ['Marco', 'Trond', 'Svein Erik', 'Kjetil L'],
  ['Vegard', 'Morten', 'Trond', 'Svein Erik'],
  ['Morten', 'Vegard', 'Trond', 'Sverre'],
  ['Kjetil L', 'Svein Erik', 'Martin V', 'Morten'],
  ['Morten', 'Vegard', 'Sverre', 'Svein Erik'],
  ['Morten', 'Sverre', 'Svein Erik', 'Martin V'],
  ['Vegard', 'Kjetil L', 'Morten', 'Sverre'],
  ['Øystein', 'Svein Erik', 'Joar', 'Magnus'],
  ['Are', 'Sverre', 'Vegard', 'Mads'],
  ['Øystein', 'Magnus', 'Svein Erik', 'Joar'],
  ['Mads', 'Are', 'Sverre', 'Vegard'],
  ['Are', 'Sverre', 'Øystein', 'Marco'],
  ['Svein Erik', 'Joar', 'Magnus', 'Morten'],
  ['Vegard', 'Joar', 'Are', 'Svein Erik'],
  ['Mads', 'Sverre', 'Morten', 'Øystein'],
  ['Are', 'Svein Erik', 'Joar', 'Mads'],
  ['Marco', 'Joar', 'Are', 'Svein Erik'],
  ['Morten', 'Mads', 'Øystein', 'Magnus'],
  ['Øystein', 'Magnus', 'Joar', 'Marco'],
  ['Morten', 'Mads', 'Vegard', 'Svein Erik'],
  ['Marco', 'Joar', 'Vegard', 'Svein Erik'],
  ['Morten', 'Mads', 'Magnus', 'Øystein'],
  ['Øystein', 'Joar', 'Magnus', 'Vegard'],
  ['Are', 'Morten', 'Marco', 'Joar'],
  ['Marco', 'Are', 'Øystein', 'Svein Erik'],
  ['Vegard', 'Magnus', 'Morten', 'Sverre'],
  ['Marco', 'Morten', 'Svein Erik', 'Mads'],
  ['Vegard', 'Morten', 'Magnus', 'Joar'],
  ['Øystein', 'Svein Erik', 'Magnus', 'Morten'],
  ['Mads', 'Sverre', 'Are', 'Marco'],
  ['Øystein', 'Mads', 'Are', 'Svein Erik'],
  ['Magnus', 'Sverre', 'Morten', 'Joar'],
  ['Svein Erik', 'Trond', 'Marco', 'Joar'],
  ['Are', 'Magnus', 'Morten', 'Mads'],
  ['Øystein', 'Magnus', 'Marco', 'Joar'],
  ['Are', 'Svein Erik', 'Morten', 'Mads'],
  ['Vegard', 'Marco', 'Morten', 'Joar'],
  ['Øystein', 'Sverre', 'Are', 'Svein Erik'],
  ['Vegard', 'Joar', 'Trond', 'Morten'],
  ['Øystein', 'Mads', 'Are', 'Magnus'],
  ['Magnus', 'Vegard', 'Martin V', 'Joar'],
  ['Svein Erik', 'Are', 'Øystein', 'Marco'],
  ['Svein Erik', 'Joar', 'Morten', 'Magnus'],
  ['Trond', 'Vegard', 'Øystein', 'Sverre'],
  ['Øystein', 'Svein Erik', 'Joar', 'Mads'],
  ['Marco', 'Are', 'Trond', 'Morten'],
  ['Øystein', 'Joar', 'Morten', 'Vegard'],
  ['Are', 'Mads', 'Svein Erik', 'Sverre'],
  ['Øystein', 'Vegard', 'Marco', 'Joar'],
  ['Morten', 'Are', 'Øystein', 'Svein Erik'],
  ['Are', 'Joar', 'Marco', 'Vegard'],
  ['Øystein', 'Morten', 'Svein Erik', 'Sverre'],
  ['Are', 'Marco', 'Morten', 'Svein Erik'],
  ['Joar', 'Trond', 'Mads', 'Sverre'],
  ['Øystein', 'Joar', 'Marco', 'Vegard'],
  ['Are', 'Morten', 'Svein Erik', 'Mads'],
  ['Øystein', 'Martin V', 'Trond', 'Magnus'],
  ['Morten', 'Joar', 'Vegard', 'Svein Erik'],
  ['Trond', 'Magnus', 'Svein Erik', 'Sverre'],
  ['Øystein', 'Vegard', 'Are', 'Joar'],
  ['Morten', 'Marco', 'Svein Erik', 'Vegard'],
  ['Are', 'Joar', 'Øystein', 'Morten'],
  ['Are', 'Joar', 'Svein Erik', 'Marco'],
  ['Trond', 'Kjetil L', 'Magnus', 'Sverre'],
  ['Øystein', 'Vegard', 'Morten', 'Mads'],
  ['Joar', 'Vegard', 'Øystein', 'Trond'],
  ['Morten', 'Marco', 'Are', 'Svein Erik'],
  ['Kjetil L', 'Are', 'Svein Erik', 'Vegard'],
  ['Øystein', 'Mads', 'Morten', 'Joar'],
  ['Svein Erik', 'Sverre', 'Are', 'Øystein'],
  ['Morten', 'Vegard', 'Joar', 'Magnus'],
  ['Trond', 'Are', 'Svein Erik', 'Marco'],
  ['Øystein', 'Vegard', 'Joar', 'Morten'],
  ['Trond', 'Vegard', 'Øystein', 'Are'],
  ['Mads', 'Sverre', 'Kjetil L', 'Magnus'],
  ['Kjetil L', 'Marco', 'Magnus', 'Vegard'],
  ['Øystein', 'Trond', 'Are', 'Svein Erik'],
  ['Vegard', 'Kjetil L', 'Svein Erik', 'Sverre'],
  ['Are', 'Sverre', 'Marco', 'Øystein'],
  ['Marco', 'Trond', 'Are', 'Svein Erik'],
  ['Vegard', 'Sverre', 'Magnus', 'Øystein'],
  ['Are', 'Joar', 'Marco', 'Svein Erik'],
  ['Vegard', 'Øystein', 'Are', 'Svein Erik'],
  ['Are', 'Marco', 'Vegard', 'Svein Erik'],
  ['Joar', 'Øystein', 'Are', 'Svein Erik'],
  ['Magnus', 'Kjetil L', 'Trond', 'Øystein'],
  ['Marco', 'Are', 'Vegard', 'Joar'],
  ['Joar', 'Kjetil L', 'Marco', 'Øystein'],
  ['Morten', 'Mads', 'Svein Erik', 'Are'],
  ['Kjetil L', 'Sverre', 'Trond', 'Are'],
  ['Joar', 'Vegard', 'Svein Erik', 'Marco'],
  ['Are', 'Sverre', 'Vegard', 'Joar'],
  ['Øystein', 'Mads', 'Kjetil L', 'Morten'],
  ['Are', 'Øystein', 'Marco', 'Trond'],
  ['Magnus', 'Kjetil L', 'Joar', 'Øystein'],
  ['Joar', 'Marco', 'Morten', 'Trond'],
  ['Magnus', 'Øystein', 'Svein Erik', 'Mads'],
  ['Marco', 'Sverre', 'Svein Erik', 'Kjetil L'],
  ['Joar', 'Øystein', 'Morten', 'Are'],
  ['Vegard', 'Magnus', 'Svein Erik', 'Trond'],
  ['Morten', 'Kjetil L', 'Mads', 'Sverre'],
  ['Kjetil L', 'Magnus', 'Vegard', 'Sverre'],
  ['Vegard', 'Sverre', 'Magnus', 'Kjetil L'],
  ['Vegard', 'Ole Kristian', 'Marco', 'Øystein'],
  ['Morten', 'Trond', 'Svein Erik', 'Joar'],
  ['Vegard', 'Trond', 'Are', 'Øystein'],
  ['Ole Kristian', 'Sverre', 'Morten', 'Mads'],
  ['Ole Kristian', 'Sverre', 'Magnus', 'Trond'],
  ['Joar', 'Kjetil L', 'Vegard', 'Are'],
  ['Morten', 'Sverre', 'Svein Erik', 'Magnus'],
  ['Ole Kristian', 'Mads', 'Vegard', 'Joar'],
  ['Are', 'Morten', 'Øystein', 'Martin V'],
  ['Magnus', 'Ole Kristian', 'Svein Erik', 'Joar'],
  ['Are', 'Øystein', 'Magnus', 'Kjetil L'],
  ['Vegard', 'Ole Kristian', 'Morten', 'Mads'],
  ['Joar', 'Kjetil L', 'Ole Kristian', 'Morten'],
  ['Are', 'Øystein', 'Vegard', 'Magnus'],
  ['Joar', 'Kjetil L', 'Morten', 'Vegard'],
  ['Ole Kristian', 'Mads', 'Svein Erik', 'Are'],
  ['Vegard', 'Svein Erik', 'Morten', 'Øystein'],
  ['Are', 'Mads', 'Øystein', 'Joar'],
  ['Magnus', 'Morten', 'Ole Kristian', 'Joar'],
  ['Are', 'Mads', 'Svein Erik', 'Sverre'],
  ['Vegard', 'Øystein', 'Magnus', 'Kjetil L'],
  ['Are', 'Sverre', 'Vegard', 'Morten'],
  ['Morten', 'Kjetil L', 'Magnus', 'Øystein'],
  ['Trond', 'Are', 'Morten', 'Kjetil L'],
  ['Vegard', 'Øystein', 'Svein Erik', 'Kjetil L'],
  ['Are', 'Marco', 'Ole Kristian', 'Morten'],
  ['Kjetil L', 'Øystein', 'Trond', 'Sverre'],
  ['Vegard', 'Svein Erik', 'Ole Kristian', 'Morten'],
  ['Ole Kristian', 'Kjetil L', 'Vegard', 'Sverre'],
  ['Trond', 'Ole Kristian', 'Øystein', 'Sverre'],
  ['Svein Erik', 'Kjetil L', 'Are', 'Morten'],
  ['Trond', 'Marco', 'Martin V', 'Øystein'],
  ['Vegard', 'Ole Kristian', 'Magnus', 'Kjetil L'],
  ['Joar', 'Øystein', 'Marco', 'Morten'],
  ['Magnus', 'Kjetil L', 'Ole Kristian', 'Vegard'],
  ['Trond', 'Martin V', 'Morten', 'Øystein'],
  ['Vegard', 'Are', 'Joar', 'Øystein'],
  ['Trond', 'Øystein', 'Ole Kristian', 'Kjetil L'],
  ['Morten', 'Mads', 'Joar', 'Vegard'],
  ['Vegard', 'Svein Erik', 'Morten', 'Marco'],
  ['Joar', 'Kjetil L', 'Øystein', 'Magnus'],
  ['Kjetil L', 'Sverre', 'Vegard', 'Øystein'],
  ['Joar', 'Trond', 'Morten', 'Are'],
  ['Morten', 'Marco', 'Trond', 'Joar'],
  ['Vegard', 'Kjetil L', 'Øystein', 'Magnus'],
  ['Marco', 'Kjetil L', 'Are', 'Morten'],
  ['Vegard', 'Trond', 'Magnus', 'Øystein'],
  ['Vegard', 'Kjetil L', 'Joar', 'Trond'],
  ['Marco', 'Øystein', 'Ole Kristian', 'Morten'],
  ['Marco', 'Kjetil L', 'Vegard', 'Joar'],
  ['Ole Kristian', 'Are', 'Magnus', 'Morten'],
  ['Morten', 'Øystein', 'Marco', 'Joar'],
  ['Mads', 'Sverre', 'Vegard', 'Ole Kristian'],
  ['Morten', 'Kjetil L', 'Vegard', 'Are'],
  ['Ole Kristian', 'Trond', 'Joar', 'Sverre'],
  ['Magnus', 'Kjetil L', 'Ole Kristian', 'Are'],
  ['Vegard', 'Joar', 'Morten', 'Øystein'],
  ['Are', 'Kjetil L', 'Morten', 'Øystein'],
  ['Ole Kristian', 'Marco', 'Vegard', 'Joar'],
  ['Joar', 'Kjetil L', 'Marco', 'Are'],
  ['Ole Kristian', 'Sverre', 'Vegard', 'Mads'],
  ['Magnus', 'Øystein', 'Vegard', 'Kjetil L'],
  ['Ole Kristian', 'Sverre', 'Are', 'Marco'],
  ['Morten', 'Øystein', 'Joar', 'Marco'],
  ['Vegard', 'Kjetil L', 'Magnus', 'Sverre'],
  ['Marco', 'Øystein', 'Magnus', 'Kjetil L'],
  ['Are', 'Morten', 'Ole Kristian', 'Mads'],
  ['Vegard', 'Ole Kristian', 'Morten', 'Øystein'],
  ['Are', 'Sverre', 'Marco', 'Kjetil L'],
  ['Morten', 'Mads', 'Magnus', 'Ole Kristian'],
  ['Vegard', 'Kjetil L', 'Joar', 'Øystein'],
  ['Vegard', 'Morten', 'Ole Kristian', 'Joar'],
  ['Are', 'Øystein', 'Kjetil L', 'Magnus'],
  ['Magnus', 'Øystein', 'Morten', 'Kjetil L'],
  ['Ole Kristian', 'Sverre', 'Are', 'Marco'],
  ['Trond', 'Øystein', 'Marco', 'Joar'],
  ['Vegard', 'Øystein', 'Trond', 'Joar'],
  ['Vegard', 'Marco', 'Joar', 'Martin V'],
  ['Trond', 'Øystein', 'Vegard', 'Marco'],
  ['Marco', 'Øystein', 'Martin V', 'Joar'],
  ['Trond', 'Vegard', 'Joar', 'Øystein'],
  ['Martin V', 'Marco', 'Are', 'Morten'],
  ['Øystein', 'Sverre', 'Trond', 'Vegard'],
  ['Trond', 'Marco', 'Vegard', 'Joar'],
  ['Are', 'Sverre', 'Morten', 'Øystein'],
  ['Ole Kristian', 'Marco', 'Are', 'Morten'],
  ['Joar', 'Kjetil L', 'Ole Kristian', 'Are'],
  ['Kjetil L', 'Magnus', 'Joar', 'Marco'],
  ['Ole Kristian', 'Sverre', 'Morten', 'Are'],
  ['Mads', 'Trond', 'Magnus', 'Kjetil L'],
  ['Are', 'Morten', 'Marco', 'Joar'],
  ['Are', 'Joar', 'Morten', 'Sverre'],
  ['Kjetil L', 'Trond', 'Magnus', 'Mads'],
  ['Marco', 'Joar', 'Are', 'Morten'],
  ['Kjetil L', 'Sverre', 'Are', 'Joar'],
  ['Magnus', 'Joar', 'Trond', 'Morten'],
  ['Marco', 'Kjetil L', 'Are', 'Magnus'],
  ['Are', 'Martin V', 'Marco', 'Joar'],
  ['Trond', 'Magnus', 'Morten', 'Sverre'],
  ['Joar', 'Trond', 'Martin V', 'Magnus'],
  ['Are', 'Marco', 'Morten', 'Kjetil L'],
  ['Marco', 'Kjetil L', 'Are', 'Joar'],
  ['Are', 'Joar', 'Marco', 'Magnus'],
  ['Kjetil L', 'Sverre', 'Are', 'Magnus'],
  ['Are', 'Joar', 'Marco', 'Magnus'],
  ['Kjetil L', 'Marco', 'Joar', 'Magnus'],
  ['Magnus', 'Kjetil L', 'Are', 'Joar'],
  ['Trond', 'Mads', 'Morten', 'Sverre'],
  ['Are', 'Magnus', 'Morten', 'Mads'],
  ['Joar', 'Marco', 'Morten', 'Mads'],
  ['Trond', 'Sverre', 'Joar', 'Are'],
  ['Morten', 'Mads', 'Kjetil L', 'Magnus'],
  ['Marco', 'Joar', 'Ole Kristian', 'Morten'],
  ['Are', 'Trond', 'Magnus', 'Ole Kristian'],
  ['Are', 'Joar', 'Trond', 'Marco'],
  ['Magnus', 'Sverre', 'Morten', 'Ole Kristian'],
  ['Joar', 'Marco', 'Morten', 'Ole Kristian'],
  ['Are', 'Trond', 'Ole Kristian', 'Morten'],
  ['Joar', 'Are', 'Marco', 'Trond'],
  ['Ole Kristian', 'Sverre', 'Morten', 'Mads'],
  ['Marco', 'Magnus', 'Joar', 'Are'],
  ['Morten', 'Sverre', 'Joar', 'Marco'],
  ['Are', 'Magnus', 'Joar', 'Trond'],
  ['Joar', 'Mads', 'Trond', 'Martin V'],
  ['Ole Kristian', 'Marco', 'Morten', 'Are'],
  ['Magnus', 'Mads', 'Joar', 'Marco'],
  ['Ole Kristian', 'Are', 'Magnus', 'Mads'],
  ['Magnus', 'Ole Kristian', 'Joar', 'Marco'],
  ['Vegard', 'Are', 'Ole Kristian', 'Magnus'],
  ['Vegard', 'Are', 'Ole Kristian', 'Joar'],
  ['Morten', 'Mads', 'Magnus', 'Sverre'],
  ['Vegard', 'Magnus', 'Marco', 'Morten'],
  ['Are', 'Joar', 'Morten', 'Marco'],
  ['Mads', 'Sverre', 'Ole Kristian', 'Trond'],
  ['Ole Kristian', 'Joar', 'Are', 'Morten'],
  ['Marco', 'Trond', 'Are', 'Morten'],
  ['Trond', 'Magnus', 'Ole Kristian', 'Morten'],
  ['Vegard', 'Are', 'Joar', 'Sverre'],
  ['Øystein', 'Magnus', 'Are', 'Morten'],
  ['Ole Kristian', 'Mads', 'Joar', 'Trond'],
  ['Øystein', 'Martin V', 'Marco', 'Are'],
  ['Magnus', 'Sverre', 'Vegard', 'Joar'],
  ['Are', 'Marco', 'Vegard', 'Joar'],
  ['Sverre', 'Øystein', 'Magnus', 'Trond'],
  ['Ole Kristian', 'Trond', 'Magnus', 'Sverre'],
  ['Øystein', 'Joar', 'Marco', 'Are'],
  ['Øystein', 'Vegard', 'Sverre', 'Joar'],
  ['Ole Kristian', 'Trond', 'Magnus', 'Mads'],
  ['Øystein', 'Vegard', 'Sverre', 'Martin V'],
  ['Joar', 'Mads', 'Ole Kristian', 'Marco'],
  ['Vegard', 'Marco', 'Joar', 'Morten'],
  ['Sverre', 'Øystein', 'Mads', 'Trond'],
  ['Vegard', 'Marco', 'Martin V', 'Øystein'],
  ['Joar', 'Sverre', 'Martin V', 'Vegard'],
  ['Marco', 'Øystein', 'Joar', 'Vegard'],
  ['Ole Kristian', 'Magnus', 'Joar', 'Marco'],
  ['Vegard', 'Mads', 'Marco', 'Øystein'],
  ['Vegard', 'Sverre', 'Marco', 'Joar'],
  ['Ole Kristian', 'Kjetil L', 'Magnus', 'Øystein'],
  ['Marco', 'Mads', 'Kjetil L', 'Magnus'],
  ['Joar', 'Kjetil L', 'Magnus', 'Are'],
  ['Øystein', 'Trond', 'Sverre', 'Ole Kristian'],
  ['Are', 'Marco', 'Magnus', 'Øystein'],
  ['Kjetil L', 'Ole Kristian', 'Øystein', 'Mads'],
  ['Are', 'Mads', 'Ole Kristian', 'Øystein'],
  ['Øystein', 'Joar', 'Magnus', 'Marco'],
  ['Magnus', 'Kjetil L', 'Marco', 'Morten'],
  ['Are', 'Trond', 'Joar', 'Øystein'],
  ['Joar', 'Sverre', 'Martin V', 'Marco'],
  ['Øystein', 'Ole Kristian', 'Magnus', 'Mads'],
  ['Joar', 'Sverre', 'Martin V', 'Marco'],
  ['Øystein', 'Ole Kristian', 'Mads', 'Magnus'],
  ['Joar', 'Ole Kristian', 'Marco', 'Magnus'],
  ['Magnus', 'Sverre', 'Trond', 'Are'],
  ['Marco', 'Mads', 'Ole Kristian', 'Øystein'],
  ['Magnus', 'Kjetil L', 'Joar', 'Øystein'],
  ['Marco', 'Sverre', 'Ole Kristian', 'Joar'],
  ['Trond', 'Sverre', 'Ole Kristian', 'Joar'],
  ['Øystein', 'Marco', 'Magnus', 'Kjetil L'],
  ['Martin V', 'Sverre', 'Joar', 'Ole Kristian'],
  ['Magnus', 'Øystein', 'Marco', 'Are'],
  ['Joar', 'Kjetil L', 'Magnus', 'Are'],
  ['Trond', 'Mads', 'Øystein', 'Sverre'],
  ['Are', 'Marco', 'Vegard', 'Joar'],
  ['Øystein', 'Mads', 'Ole Kristian', 'Kjetil L'],
  ['Kjetil L', 'Are', 'Vegard', 'Joar'],
  ['Øystein', 'Ole Kristian', 'Sverre', 'Trond'],
  ['Vegard', 'Sverre', 'Magnus', 'Kjetil L'],
  ['Joar', 'Mads', 'Marco', 'Are'],
  ['Marco', 'Kjetil L', 'Magnus', 'Sverre'],
  ['Ole Kristian', 'Are', 'Vegard', 'Øystein'],
  ['Ole Kristian', 'Joar', 'Marco', 'Are'],
  ['Ole Kristian', 'Are', 'Joar', 'Øystein'],
  ['Øystein', 'Marco', 'Joar', 'Vegard'],
  ['Mads', 'Trond', 'Ole Kristian', 'Kjetil L'],
  ['Trond', 'Magnus', 'Joar', 'Kjetil L'],
  ['Øystein', 'Sverre', 'Vegard', 'Marco'],
  ['Marco', 'Kjetil L', 'Vegard', 'Joar'],
  ['Trond', 'Sverre', 'Are', 'Magnus'],
  ['Vegard', 'Joar', 'Marco', 'Martin V'],
  ['Øystein', 'Trond', 'Marco', 'Vegard'],
  ['Øystein', 'Vegard', 'Martin V', 'Kjetil L'],
  ['Vegard', 'Kjetil L', 'Joar', 'Sverre'],
  ['Kjetil L', 'Martin V', 'Joar', 'Sverre'],
  ['Øystein', 'Vegard', 'Sverre', 'Marco'],
  ['Marco', 'Trond', 'Joar', 'Sverre'],
  ['Øystein', 'Mads', 'Joar', 'Vegard'],
  ['Joar', 'Sverre', 'Marco', 'Trond'],
  ['Øystein', 'Kjetil L', 'Trond', 'Vegard'],
  ['Øystein', 'Mads', 'Joar', 'Kjetil L'],
  ['Vegard', 'Sverre', 'Ole Kristian', 'Kjetil L'],
  ['Joar', 'Kjetil L', 'Øystein', 'Mads'],
  ['Ole Kristian', 'Sverre', 'Vegard', 'Mads'],
  ['Kjetil L', 'Øystein', 'Sverre', 'Joar'],
  ['Vegard', 'Trond', 'Joar', 'Kjetil L'],
  ['Sverre', 'Marco', 'Øystein', 'Trond'],
  ['Vegard', 'Are', 'Kjetil L', 'Joar'],
  ['Mads', 'Øystein', 'Ole Kristian', 'Marco'],
  ['Martin', 'Mads', 'Are', 'Trond'],
  ['Ole Kristian', 'Kjetil L', 'Sverre', 'Øystein'],
  ['Are', 'Martin', 'Joar', 'Kjetil L'],
  ['Ole Kristian', 'Trond', 'Vegard', 'Marco'],
  ['Are', 'Ole Kristian', 'Joar', 'Vegard'],
  ['Sverre', 'Mads', 'Trond', 'Øystein'],
  ['Vegard', 'Mads', 'Ole Kristian', 'Marco'],
  ['Martin', 'Mads', 'Magnus', 'Kjetil L'],
  ['Marco', 'Trond', 'Are', 'Magnus'],
  ['Ole Kristian', 'Vegard', 'Joar', 'Øystein'],
  ['Ole Kristian', 'Mads', 'Trond', 'Joar'],
  ['Sverre', 'Vegard', 'Øystein', 'Are'],
  ['Marco', 'Kjetil L', 'Trond', 'Magnus'],
  ['Ole Kristian', 'Magnus', 'Marco', 'Mads'],
  ['Trond', 'Kjetil L', 'Are', 'Joar'],
  ['Vegard', 'Øystein', 'Ole Kristian', 'Sverre'],
  ['Martin', 'Kjetil L', 'Øystein', 'Magnus'],
  ['Are', 'Vegard', 'Øystein', 'Joar'],
  ['Are', 'Joar', 'Trond', 'Marco'],
  ['Sverre', 'Kjetil L', 'Øystein', 'Vegard'],
  ['Trond', 'Are', 'Joar', 'Marco'],
  ['Mads', 'Øystein', 'Trond', 'Sverre'],
  ['Magnus', 'Vegard', 'Are', 'Ole Kristian'],
  ['Marco', 'Vegard', 'Joar', 'Mads'],
  ['Are', 'Øystein', 'Trond', 'Ole Kristian'],
  ['Øystein', 'Are', 'Ole Kristian', 'Mads'],
  ['Magnus', 'Vegard', 'Øystein', 'Joar'],
  ['Martin', 'Øystein', 'Magnus', 'Sverre'],
  ['Trond', 'Ole Kristian', 'Mads', 'Are'],
  ['Joar', 'Øystein', 'Trond', 'Marco'],
  ['Mads', 'Are', 'Ole Kristian', 'Vegard'],
  ['Trond', 'Are', 'Marco', 'Joar'],
  ['Kjetil L', 'Vegard', 'Martin', 'Magnus'],
  ['Kjetil L', 'Magnus', 'Martin', 'Joar'],
  ['Sverre', 'Ole Kristian', 'Øystein', 'Vegard'],
  ['Marco', 'Kjetil L', 'Joar', 'Trond'],
  ['Ole Kristian', 'Øystein', 'Mads', 'Vegard'],
  ['Øystein', 'Sverre', 'Are', 'Martin'],
  ['Martin', 'Magnus', 'Kjetil L', 'Are'],
  ['Martin', 'Are', 'Marco', 'Vegard'],
  ['Øystein', 'Sverre', 'Marco', 'Vegard'],
  ['Marco', 'Mads', 'Magnus', 'Martin'],
  ['Martin', 'Mads', 'Magnus', 'Vegard'],
  ['Sverre', 'Marco', 'Joar', 'Trond'],
  ['Trond', 'Mads', 'Joar', 'Marco'],
  ['Joar', 'Vegard', 'Geir Are', 'Mads'],
  ['Marco', 'Trond', 'Geir Are', 'Mads'],
  ['Ole Kristian', 'Mads', 'Joar', 'Trond'],
  ['Marco', 'Øystein', 'Vegard', 'Joar'],
  ['Magnus', 'Vegard', 'Mads', 'Trond'],
  ['Martin', 'Ole Kristian', 'Øystein', 'Joar'],
  ['Øystein', 'Trond', 'Marco', 'Vegard'],
  ['Marco', 'Mads', 'Joar', 'Vegard'],
  ['Vegard', 'Øystein', 'Trond', 'Sverre'],
  ['Marco', 'Vegard', 'Joar', 'Øystein'],
  ['Sverre', 'Trond', 'Øystein', 'Marco'],
  ['Joar', 'Trond', 'Magnus', 'Vegard'],
  ['Sverre', 'Martin', 'Øystein', 'Marco'],
  ['Joar', 'Vegard', 'Martin', 'Tor Arne'],
  ['Øystein', 'Sverre', 'Mads', 'Marco'],
  ['Sverre', 'Marco', 'Magnus', 'Martin'],
  ['Trond', 'Vegard', 'Ole Kristian', 'Mads'],
  ['Martin', 'Trond', 'Sverre', 'Magnus'],
  ['Marco', 'Vegard', 'Joar', 'Øystein'],
  ['Martin', 'Trond', 'Sverre', 'Magnus'],
  ['Marco', 'Øystein', 'Vegard', 'Joar'],
  ['Trond', 'Vegard', 'Sverre', 'Marco'],
  ['Ole Kristian', 'Øystein', 'Joar', 'Mads'],
  ['Magnus', 'Vegard', 'Marco', 'Trond'],
  ['Martin', 'Mads', 'Ole Kristian', 'Øystein'],
  ['Marco', 'Vegard', 'Øystein', 'Joar'],
  ['Trond', 'Mads', 'Ole Kristian', 'Are'],
  ['Joar', 'Mads', 'Marco', 'Magnus'],
  ['Øystein', 'Martin', 'Ole Kristian', 'Vegard'],
  ['Joar', 'Øystein', 'Marco', 'Magnus'],
  ['Sverre', 'Are', 'Magnus', 'Vegard'],
  ['Martin', 'Vegard', 'Are', 'Magnus'],
  ['Øystein', 'Sverre', 'Martin', 'Vegard'],
  ['Ole Kristian', 'Are', 'Joar', 'Øystein'],
  ['Martin', 'Mads', 'Ole Kristian', 'Vegard'],
  ['Marco', 'Are', 'Joar', 'Vegard'],
  ['Marco', 'Vegard', 'Sverre', 'Are'],
  ['Øystein', 'Ole Kristian', 'Martin', 'Mads'],
  ['Marco', 'Are', 'Sverre', 'Joar'],
  ['Mads', 'Øystein', 'Vegard', 'Ole Kristian'],
  ['Øystein', 'Are', 'Joar', 'Trond'],
  ['Mads', 'Øystein', 'Are', 'Marco'],
  ['Sverre', 'Marco', 'Joar', 'Ole Kristian'],
  ['Are', 'Trond', 'Mads', 'Øystein'],
  ['Ole Kristian', 'Trond', 'Joar', 'Vegard'],
  ['Are', 'Marco', 'Magnus', 'Øystein'],
  ['Joar', 'Trond', 'Martin', 'Marco'],
  ['Vegard', 'Øystein', 'Are', 'Sverre'],
  ['Marco', 'Martin', 'Joar', 'Are'],
  ['Sverre', 'Martin', 'Øystein', 'Marco'],
  ['Mads', 'Sverre', 'Are', 'Trond'],
  ['Sverre', 'Marco', 'Joar', 'Mads'],
  ['Sverre', 'Mads', 'Are', 'Trond'],
  ['Marco', 'Trond', 'Joar', 'Are'],
  ['Martin', 'Mads', 'Øystein', 'Joar'],
  ['Joar', 'Vegard', 'Magnus', 'Trond'],
  ['Vegard', 'Øystein', 'Mads', 'Joar'],
  ['Øystein', 'Ole Kristian', 'Are', 'Marco'],
  ['Joar', 'Vegard', 'Trond', 'Magnus'],
  ['Joar', 'Vegard', 'Øystein', 'Marco'],
  ['Are', 'Ole Kristian', 'Martin', 'Mads'],
  ['Ole Kristian', 'Vegard', 'Martin', 'Are'],
  ['Mads', 'Øystein', 'Magnus', 'Vegard'],
  ['Martin', 'Are', 'Ole Kristian', 'Trond'],
  ['Trond', 'Are', 'Joar', 'Ole Kristian'],
  ['Ole Kristian', 'Marco', 'Joar', 'Martin'],
  ['Mads', 'Øystein', 'Vegard', 'Sverre'],
  ['Magnus', 'Øystein', 'Marco', 'Joar'],
  ['Martin', 'Mads', 'Sverre', 'Trond'],
  ['Øystein', 'Are', 'Martin', 'Marco'],
  ['Joar', 'Kjetil L', 'Marco', 'Martin'],
  ['Sverre', 'Are', 'Trond', 'Øystein'],
  ['Kjetil L', 'Magnus', 'Are', 'Marco'],
  ['Mads', 'Øystein', 'Sverre', 'Ole Kristian'],
  ['Martin', 'Mads', 'Joar', 'Are'],
  ['Marco', 'Trond', 'Øystein', 'Vegard'],
  ['Sverre', 'Mads', 'Ole Kristian', 'Are'],
  ['Ole Kristian', 'Vegard', 'Sverre', 'Are'],
  ['Mads', 'Øystein', 'Magnus', 'Kjetil L'],
  ['Trond', 'Vegard', 'Sverre', 'Øystein'],
  ['Ole Kristian', 'Mads', 'Are', 'Magnus'],
  ['Kjetil L', 'Joar', 'Magnus', 'Marco'],
  ['Sverre', 'Vegard', 'Øystein', 'Are'],
  ['Ole Kristian', 'Mads', 'Trond', 'Martin'],
  ['Magnus', 'Trond', 'Joar', 'Are'],
  ['Sverre', 'Ole Kristian', 'Øystein', 'Mads'],
  ['Sverre', 'Mads', 'Are', 'Øystein'],
  ['Sverre', 'Mads', 'Ole Kristian', 'Martin'],
  ['Kjetil L', 'Trond', 'Joar', 'Øystein'],
  ['Sverre', 'Are', 'Ole Kristian', 'Martin'],
  ['Øystein', 'Are', 'Kjetil L', 'Trond'],
  ['Øystein', 'Are', 'Sverre', 'Trond'],
  ['Øystein', 'Are', 'Ole Kristian', 'Mads'],
  ['Joar', 'Are', 'Øystein', 'Magnus'],
  ['Are', 'Kjetil L', 'Sverre', 'Martin'],
  ['Mads', 'Trond', 'Ole Kristian', 'Kjetil'],
  ['Are', 'Trond', 'Joar', 'Ole Kristian'],
  ['Are', 'Ole Kristian', 'Øystein', 'Mads'],
  ['Ole Kristian', 'Mads', 'Sverre', 'Martin'],
  ['Trond', 'Ole Kristian', 'Are', 'Kjetil'],
  ['Are', 'Kjetil L', 'Øystein', 'Joar'],
  ['Øystein', 'Sverre', 'Trond', 'Kjetil L'],
  ['Ole Kristian', 'Vegard', 'Joar', 'Are'],
  ['Kjetil L', 'Svein Erik', 'Morten', 'Ole Kristian'],
  ['Øystein', 'Are', 'Trond', 'Sverre'],
  ['Kjetil L', 'Are', 'Øystein', 'Morten'],
  ['Trond', 'Vegard', 'Svein Erik', 'Joar'],
  ['Trond', 'Øystein', 'Kjetil L', 'Joar'],
  ['Vegard', 'Magnus', 'Are', 'Sverre'],
  ['Magnus', 'Kjetil L', 'Øystein', 'Joar'],
  ['Are', 'Joar', 'Øystein', 'Marco'],
  ['Øystein', 'Ole Kristian', 'Morten', 'Kjetil L'],
  ['Vegard', 'Trond', 'Magnus', 'Sverre'],
  ['Ole Kristian', 'Sverre', 'Mads', 'Morten'],
  ['Øystein', 'Are', 'Joar', 'Vegard'],
  ['Morten', 'Kjetil L', 'Vegard', 'Joar'],
  ['Ole Kristian', 'Sverre', 'Are', 'Trond'],
  ['Ole Kristian', 'Morten', 'Mads', 'Are'],
  ['Kjetil L', 'Joar', 'Øystein', 'Vegard'],
  ['Trond', 'Øystein', 'Kjetil L', 'Sverre'],
  ['Are', 'Morten', 'Marco', 'Svein Erik'],
  ['Vegard', 'Morten', 'Sverre', 'Trond'],
  ['Ole Kristian', 'Sverre', 'Magnus', 'Trond'],
  ['Svein Erik', 'Kjetil L', 'Morten', 'Joar'],
  ['Joar', 'Sverre', 'Vegard', 'Morten'],
  ['Morten', 'Kjetil L', 'Vegard', 'Joar'],
  ['Vegard', 'Trond', 'Joar', 'Sverre'],
  ['Vegard', 'Morten', 'Svein Erik', 'Joar'],
  ['Joar', 'Vegard', 'Øystein', 'Morten'],
  ['Trond', 'Mads', 'Kjetil L', 'Svein Erik'],
  ['Vegard', 'Mads', 'Ole Kristian', 'Sverre'],
  ['Sverre', 'Trond', 'Vegard', 'Morten'],
  ['Mads', 'Joar', 'Svein Erik', 'Ole Kristian'],
  ['Sverre', 'Mads', 'Kjetil L', 'Svein Erik'],
  ['Morten', 'Øystein', 'Magnus', 'Joar'],
  ['Vegard', 'Sverre', 'Morten', 'Joar'],
  ['Joar', 'Marco', 'Øystein', 'Svein Erik'],
  ['Mads', 'Svein Erik', 'Joar', 'Ole Kristian'],
  ['Kjetil L', 'Magnus', 'Øystein', 'Vegard'],
  ['Joar', 'Sverre', 'Ole Kristian', 'Morten'],
  ['Magnus', 'Vegard', 'Svein Erik', 'Kjetil L'],
  ['Vegard', 'Ole Kristian', 'Svein Erik', 'Kjetil L'],
  ['Øystein', 'Marco', 'Magnus', 'Joar'],
  ['Ole Kristian', 'Joar', 'Vegard', 'Svein Erik'],
  ['Magnus', 'Vegard', 'Svein Erik', 'Øystein'],
  ['Mads', 'Are', 'Øystein', 'Vegard'],
  ['Morten', 'Sverre', 'Joar', 'Svein Erik'],
  ['Are', 'Ole Kristian', 'Mads', 'Morten'],
  ['Øystein', 'Svein Erik', 'Marco', 'Joar'],
  ['Vegard', 'Mads', 'Ole Kristian', 'Øystein'],
  ['Ole Kristian', 'Joar', 'Mads', 'Morten'],
  ['Ole Kristian', 'Kjetil L', 'Morten', 'Sverre'],
  ['Joar', 'Vegard', 'Øystein', 'Morten'],
  ['Vegard', 'Øystein', 'Morten', 'Ole Kristian'],
  ['Ole Kristian', 'Joar', 'Marco', 'Sverre'],
  ['Mads', 'Svein Erik', 'Joar', 'Magnus'],
  ['Kjetil L', 'Sverre', 'Øystein', 'Vegard'],
  ['Trond', 'Svein Erik', 'Øystein', 'Joar'],
  ['Are', 'Øystein', 'Svein Erik', 'Sverre'],
  ['Kjetil L', 'Vegard', 'Joar', 'Ole Kristian'],
  ['Are', 'Joar', 'Kjetil L', 'Sverre'],
  ['Magnus', 'Øystein', 'Vegard', 'Svein Erik'],
  ['Vegard', 'Øystein', 'Are', 'Svein Erik'],
  ['Kjetil L', 'Joar', 'Are', 'Svein Erik'],
  ['Are', 'Trond', 'Mads', 'Morten'],
  ['Kjetil L', 'Svein Erik', 'Magnus', 'Morten'],
  ['Mads', 'Svein Erik', 'Morten', 'Joar'],
  ['Kjetil L', 'Morten', 'Joar', 'Sverre'],
  ['Mads', 'Magnus', 'Are', 'Sverre'],
  ['Øystein', 'Kjetil L', 'Morten', 'Vegard'],
  ['Trond', 'Joar', 'Mads', 'Svein Erik'],
  ['Vegard', 'Magnus', 'Are', 'Sverre'],
  ['Mads', 'Ole Kristian', 'Trond', 'Sverre'],
  ['Are', 'Øystein', 'Magnus', 'Vegard'],
  ['Joar', 'Ole Kristian', 'Øystein', 'Sverre'],
  ['Vegard', 'Are', 'Mads', 'Svein Erik'],
  ['Joar', 'Morten', 'Øystein', 'Svein Erik'],
  ['Kjetil L', 'Magnus', 'Are', 'Vegard'],
  ['Are', 'Joar', 'Mads', 'Svein Erik'],
  ['Øystein', 'Kjetil L', 'Ole Kristian', 'Magnus'],
  ['Øystein', 'Joar', 'Svein Erik', 'Are'],
  ['Kjetil L', 'Marco', 'Are', 'Magnus'],
  ['Kjetil L', 'Svein Erik', 'Magnus', 'Joar'],
  ['Vegard', 'Morten', 'Sverre', 'Øystein'],
  ['Mads', 'Magnus', 'Kjetil L', 'Morten'],
  ['Vegard', 'Trond', 'Øystein', 'Ole Kristian'],
  ['Mads', 'Joar', 'Magnus', 'Trond'],
  ['Øystein', 'Vegard', 'Kjetil L', 'Marco'],
  ['Vegard', 'Ole Kristian', 'Øystein', 'Kjetil L'],
  ['Trond', 'Sverre', 'Are', 'Magnus'],
  ['Øystein', 'Vegard', 'Ole Kristian', 'Joar'],
  ['Ole Kristian', 'Svein Erik', 'Are', 'Marco'],
  ['Vegard', 'Øystein', 'Trond', 'Joar'],
  ['Mads', 'Trond', 'Svein Erik', 'Ole Kristian'],
  ['Vegard', 'Sverre', 'Svein Erik', 'Ole Kristian'],
  ['Joar', 'Øystein', 'Are', 'Kjetil L'],
  ['Svein Erik', 'Kjetil L', 'Øystein', 'Are'],
  ['Trond', 'Joar', 'Ole Kristian', 'Vegard'],
  ['Joar', 'Øystein', 'Are', 'Vegard'],
  ['Trond', 'Sverre', 'Are', 'Morten'],
  ['Trond', 'Øystein', 'Are', 'Joar'],
  ['Mads', 'Ole Kristian', 'Trond', 'Sverre'],
  ['Joar', 'Øystein', 'Vegard', 'Svein Erik'],
  ['Vegard', 'Sverre', 'Joar', 'Svein Erik'],
  ['Øystein', 'Morten', 'Joar', 'Svein Erik'],
  ['Trond', 'Ole Kristian', 'Vegard', 'Are'],
  ['Svein Erik', 'Øystein', 'Morten', 'Ole Kristian'],
  ['Joar', 'Are', 'Morten', 'Marco'],
  ['Mads', 'Ole Kristian', 'Svein Erik', 'Joar'],
  ['Øystein', 'Are', 'Trond', 'Marco'],
  ['Mads', 'Morten', 'Joar', 'Are'],
  ['Øystein', 'Svein Erik', 'Ole Kristian', 'Vegard'],
  ['Sverre', 'Joar', 'Trond', 'Morten'],
  ['Vegard', 'Ole Kristian', 'Mads', 'Svein Erik'],
  ['Trond', 'Kjetil L', 'Øystein', 'Morten'],
  ['Vegard', 'Svein Erik', 'Ole Kristian', 'Sverre'],
  ['Morten', 'Vegard', 'Joar', 'Sverre'],
  ['Mads', 'Are', 'Ole Kristian', 'Joar'],
  ['Vegard', 'Morten', 'Joar', 'Trond'],
  ['Trond', 'Are', 'Øystein', 'Sverre'],
  ['Joar', 'Are', 'Øystein', 'Morten'],
  ['Mads', 'Sverre', 'Ole Kristian', 'Are'],
  ['Øystein', 'Trond', 'Svein Erik', 'Vegard'],
  ['Trond', 'Are', 'Øystein', 'Svein Erik'],
  ['Mads', 'Are', 'Joar', 'Ole Kristian'],
  ['Vegard', 'Svein Erik', 'Sverre', 'Trond'],
  ['Are', 'Joar', 'Øystein', 'Svein Erik'],
  ['Svein Erik', 'Trond', 'Ole Kristian', 'Marco'],
  ['Mads', 'Morten', 'Joar', 'Are'],
  ['Trond', 'Sverre', 'Vegard', 'Svein Erik'],
  ['Mads', 'Sverre', 'Trond', 'Øystein'],
  ['Svein Erik', 'Joar', 'Are', 'Magnus'],
  ['Mads', 'Sverre', 'Øystein', 'Trond'],
  ['Joar', 'Morten', 'Svein Erik', 'Sverre'],
  ['Are', 'Trond', 'Vegard', 'Kjetil L'],
  ['Morten', 'Joar', 'Svein Erik', 'Sverre'],
  ['Vegard', 'Trond', 'Are', 'Kjetil L'],
  ['Mads', 'Morten', 'Sverre', 'Joar'],
  ['Ole Kristian', 'Kjetil L', 'Are', 'Svein Erik'],
  ['Trond', 'Svein Erik', 'Ole Kristian', 'Morten'],
  ['Vegard', 'Kjetil L', 'Are', 'Joar'],
  ['Are', 'Sverre', 'Mads', 'Ole Kristian'],
  ['Vegard', 'Morten', 'Trond', 'Svein Erik'],
  ['Trond', 'Svein Erik', 'Morten', 'Joar'],
  ['Vegard', 'Ole Kristian', 'Are', 'Joar'],
  ['Mads', 'Ole Kristian', 'Morten', 'Are'],
  ['Vegard', 'Sverre', 'Trond', 'Svein Erik'],
  ['Morten', 'Sverre', 'Trond', 'Svein Erik'],
  ['Vegard', 'Joar', 'Svein Erik', 'Trond'],
  ['Trond', 'Sverre', 'Mads', 'Morten'],
  ['Are', 'Ole Kristian', 'Joar', 'Svein Erik'],
  ['Joar', 'Morten', 'Trond', 'Are'],
  ['Øystein', 'Ole Kristian', 'Vegard', 'Svein Erik'],
  ['Are', 'Joar', 'Svein Erik', 'Sverre'],
  ['Are', 'Øystein', 'Joar', 'Morten'],
  ['Morten', 'Sverre', 'Mads', 'Svein Erik'],
  ['Vegard', 'Are', 'Ole Kristian', 'Joar'],
  ['Ole Kristian', 'Joar', 'Are', 'Svein Erik'],
  ['Are', 'Sverre', 'Mads', 'Svein Erik'],
  ['Mads', 'Svein Erik', 'Ole Kristian', 'Joar'],
  ['Ole Kristian', 'Joar', 'Vegard', 'Svein Erik'],
  ['Ole Kristian', 'Are', 'Mads', 'Svein Erik'],
  ['Magnus', 'Kjetil L', 'Vegard', 'Joar'],
  ['Magnus', 'Kjetil L', 'Vegard', 'Svein Erik'],
  ['Are', 'Joar', 'Vegard', 'Svein Erik'],
  ['Are', 'Ole Kristian', 'Morten', 'Sverre'],
  ['Joar', 'Kjetil L', 'Vegard', 'Magnus'],
  ['Are', 'Kjetil L', 'Ole Kristian', 'Morten'],
  ['Joar', 'Vegard', 'Svein Erik', 'Sverre'],
  ['Joar', 'Magnus', 'Svein Erik', 'Kjetil L'],
  ['Morten', 'Sverre', 'Vegard', 'Arnfinn'],
  ['Vegard', 'Joar', 'Sverre', 'Morten'],
  ['Morten', 'Kjetil L', 'Are', 'Sverre'],
  ['Magnus', 'Svein Erik', 'Trond', 'Morten'],
  ['Joar', 'Are', 'Arnfinn', 'Kjetil L'],
  ['Vegard', 'Trond', 'Svein Erik', 'Are'],
  ['Magnus', 'Kjetil L', 'Ole Kristian', 'Sverre'],
  ['Kjetil L', 'Svein Erik', 'Vegard', 'Morten'],
  ['Ole Kristian', 'Are', 'Trond', 'Joar'],
  ['Kjetil L', 'Morten', 'Joar', 'Ole Kristian'],
  ['Are', 'Svein Erik', 'Vegard', 'Ole Kristian'],
  ['Kjetil L', 'Sverre', 'Magnus', 'Morten'],
  ['Joar', 'Svein Erik', 'Morten', 'Trond'],
  ['Morten', 'Sverre', 'Joar', 'Svein Erik'],
  ['Trond', 'Kjetil L', 'Vegard', 'Are'],
  ['Trond', 'Morten', 'Svein Erik', 'Magnus'],
  ['Vegard', 'Sverre', 'Joar', 'Arnfinn'],
  ['Kjetil L', 'Morten', 'Are', 'Magnus'],
  ['Sverre', 'Vegard', 'Ole Kristian', 'Trond']
];

interface History {
  rating: number;
  probability: number;
  diff: number;
  won?: boolean;
}

interface Player {
  name: string;
  rating: number;
  history: History[];
  matches: number;
  wins: number;
}

interface Rating {
  name: string;
  rating: number;
  probability: number;
  won: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public historikkCtrl = new FormControl('');
  public playerFunFactHistoryCtrl = new FormControl('');
  public playerFunFactHistory: any;
  public playerHistory: History[] = [];
  public players: Player[] = [];

  private pointPot = 20;
  private BASE_ELO = 1500;
  private matchNum = 1;
  private historyShownFor: Player;
  private playersToIgnore: string[] = ['Geir Are', 'Tor Arne', 'Martin', 'Kjetil', 'Martin V'];


  ngOnInit(): void {
    this.historikkCtrl.valueChanges.subscribe(val => {
      if (!val) {
        this.playerHistory = [];
        this.historyShownFor = null;

        return;
      }
      const p: Player = this.players.find(p => p.name === val);

      this.playerHistory = [...p.history];
      this.historyShownFor = p;
    });
    this.playerFunFactHistoryCtrl.valueChanges.subscribe(playerName => {
      this.playerFunFactHistory = this.players.find(p => p.name === playerName).funFacts;
    });
    this.initHistory();
    this.calculateFunFacts();
  }

  public isFinite(num: number): boolean {
    return isFinite(num);
  }

  private getRatio(ratio: number): string {
    return isFinite(ratio) ? '1:1' : `${ratio}:1`;
  }

  private calculateFunFacts(): void {
    const SURE_WIN_MIN = 0.8;
    const SURE_LOSS_MAX = 0.2;

    // Calculate stats about matches the players should have won
    for (let i = 0, player = this.players[i]; i < this.players.length; ++i, player = this.players[i]) {
      // for (const player of this.players) {
      const { history: playerHistory } = player;
      //#region Calculate sure win matches stats
      const sureWinMatches = player.history.filter(match => match.probability >= SURE_WIN_MIN);
      let wins = 0, losses = 0, probabilityAcc = 0;
      let matchTotal = sureWinMatches.length;
      sureWinMatches.forEach(swMatch => {
        if (swMatch.won) {
          wins++;
        } else {
          losses++;
        }
        probabilityAcc += swMatch.probability;
      });
      let winLossRatio = wins / losses;
      let averageProbability = probabilityAcc / matchTotal;
      const sureWinStats = {
        wins,
        losses,
        winLossRatio,
        total: matchTotal,
        averageProbability
      };
      if (!this.players[i].funFacts) {
        this.players[i].funFacts = {
          sureWins: sureWinStats
        };
      } else {
        this.players[i].funFacts.sureWins = sureWinStats;
      }
      //#endregion

      //#region Calculate sure loss matches stats
      const sureLossMatches = player.history.filter(match => match.probability <= SURE_LOSS_MAX);
      wins = 0, losses = 0, probabilityAcc = 0;
      matchTotal = sureLossMatches.length;
      sureLossMatches.forEach(slMatch => {
        if (slMatch.won) {
          wins++;
        } else {
          losses++;
        }
        probabilityAcc += slMatch.probability;
      });
      winLossRatio = losses / wins;
      averageProbability = probabilityAcc / matchTotal;
      const sureLossStats = {
        wins,
        losses,
        winLossRatio,
        total: matchTotal,
        averageProbability
      };
      this.players[i].funFacts.sureLosses = sureLossStats;
      //#endregion
    }
  }

  private initHistory(): void {
    for (const match of matches) {
      let p1: Player;
      let p2: Player;
      let p3: Player;
      let p4: Player;

      match.forEach((playerName, index) => {
        if (!this.playersToIgnore.length || this.playersToIgnore.indexOf(playerName) < 0) {
          let player: Player = this.players.find(p => p.name === playerName);

          if (!player) {
            player = {
              name: playerName,
              rating: this.BASE_ELO,
              history: [{ rating: this.BASE_ELO, probability: 100, diff: this.BASE_ELO, won: true }],
              matches: 0,
              wins: 0
            };
            this.players.push(player);
          }
          player.matches += 1;
          switch (index) {
            case 0:
              player.wins += 1;
              p1 = player;
              break;
            case 1:
              player.wins += 1;
              p2 = player;
              break;
            case 2:
              p3 = player;
              break;
            case 3:
              p4 = player;
              break;
          }
        }
      });
      if (p1 && p2 && p3 && p4) {
        const players: Player[] = [p1, p2, p3, p4];
        let ratings: Rating[];
        ratings = this._test(players[0], players[1], players[2], players[3], false, true);
        ratings.forEach(r => {
          const p: Player = players.find(p => p.name === r.name);
          p.history.unshift({
            rating: r.rating,
            probability: r.probability,
            diff: r.rating - p.rating,
            won: r.won
          });
          p.rating = r.rating;
        });
      }
    }
    this.players.sort((a, b) => (a.rating > b.rating) ? -1 : 1);
  }

  public test(amount: number): void {
    for (let i = 0; i < amount; i++) {
      const indices: number[] = [];
      while (indices.length < 4) {
        const index: number = Math.floor(Math.random() * this.players.length);

        if (indices.indexOf(index) === -1 && this.playersToIgnore.indexOf(this.players[index].name) < 0) {
          indices.push(index);
        }
      }
      const p1: Player = this.players[indices[0]];
      const p2: Player = this.players[indices[1]];
      const p3: Player = this.players[indices[2]];
      const p4: Player = this.players[indices[3]];
      const players: Player[] = [p1, p2, p3, p4];
      let ratings: Rating[];
      // p1.rating = 1500;
      // p2.rating = 1500;
      // p3.rating = 1500;
      // p4.rating = 1500;
      players.sort((a, b) => {
        if (a.rating === b.rating) {
          return 0;
        }
        return a.rating > b.rating ? -1 : 1;
      });
      ratings = this._test(players[0], players[3], players[1], players[2], true);
      ratings.forEach(r => {
        const p: Player = players.find(p => p.name === r.name);
        p.history.unshift({
          rating: r.rating,
          probability: r.probability,
          diff: r.rating - p.rating,
          won: r.won
        });
        p.matches += 1;
        if (r.won) {
          p.wins += 1;
        }
        console.error(`Setting rating for ${p.name} to ${r.rating} (${r.rating - p.rating})`);
        p.rating = r.rating;
      });
    }
    console.error('#############################################################');
    this.players.sort((a, b) => (a.rating > b.rating) ? -1 : 1);
    if (this.historyShownFor) {
      this.playerHistory = [...this.historyShownFor.history];
    }
  }

  private _test(p1: Player, p2: Player, p3: Player, p4: Player, log: boolean = false, t1won: boolean = false): Rating[] {
    const t1elo: number = p1.rating + p2.rating;
    const t2elo: number = p3.rating + p4.rating;
    const p1prob: number = this.calculateProbability(p3.rating, p1.rating) * 100;
    const p1prob2: number = this.calculateProbability(p4.rating, p1.rating) * 100;
    const p2prob: number = this.calculateProbability(p3.rating, p2.rating) * 100;
    const p2prob2: number = this.calculateProbability(p4.rating, p2.rating) * 100;
    const p3prob: number = this.calculateProbability(p1.rating, p3.rating) * 100;
    const p3prob2: number = this.calculateProbability(p2.rating, p3.rating) * 100;
    const p4prob: number = this.calculateProbability(p1.rating, p4.rating) * 100;
    const p4prob2: number = this.calculateProbability(p2.rating, p4.rating) * 100;
    const t1prob: number = (p1prob + p1prob2 + p2prob + p2prob2) / 4;
    const t2prob: number = (p3prob + p3prob2 + p4prob + p4prob2) / 4;
    const t1winChance: number = Math.random() * 100;
    const t1win: boolean = t1won || t1winChance >= t1prob;
    const p1percent: number = (p1.rating, p2.rating, ((p1.rating * 100) / (p1.rating + p2.rating)));
    const p2percent: number = (p2.rating, p1.rating, ((p2.rating * 100) / (p2.rating + p1.rating)));
    const p3percent: number = (p3.rating, p4.rating, ((p3.rating * 100) / (p3.rating + p4.rating)));
    const p4percent: number = (p4.rating, p3.rating, ((p4.rating * 100) / (p4.rating + p3.rating)));
    const p1rating: number = this.calculateELO(p1.rating, p3.rating, t1prob, t1win);
    const p1rating2: number = this.calculateELO(p1.rating, p4.rating, t1prob, t1win);
    const p1ratingTot: number = ((((p1rating - p1.rating) + (p1rating2 - p1.rating)) * (t1win ? p2percent : p1percent)) / 100);
    const p2rating: number = this.calculateELO(p2.rating, p3.rating, t1prob, t1win);
    const p2rating2: number = this.calculateELO(p2.rating, p4.rating, t1prob, t1win);
    const p2ratingTot: number = ((((p2rating - p2.rating) + (p2rating2 - p2.rating)) * (t1win ? p1percent : p2percent)) / 100);
    const p3rating: number = this.calculateELO(p3.rating, p1.rating, t2prob, !t1win);
    const p3rating2: number = this.calculateELO(p3.rating, p2.rating, t2prob, !t1win);
    const p3ratingTot: number = ((((p3rating - p3.rating) + (p3rating2 - p3.rating)) * (!t1win ? p4percent : p3percent)) / 100);
    const p4rating: number = this.calculateELO(p4.rating, p1.rating, t2prob, !t1win);
    const p4rating2: number = this.calculateELO(p4.rating, p2.rating, t2prob, !t1win);
    const p4ratingTot: number = ((((p4rating - p4.rating) + (p4rating2 - p4.rating)) * (!t1win ? p3percent : p4percent)) / 100);
    if (log) {
      console.error('#############################################################');
      console.error(`Simulated match (#${this.matchNum++}) starting...`);
      console.error(`Team 1: ${p1.name} (${p1.rating}) & ${p2.name} (${p2.rating}) VS Team 2: ${p3.name} (${p3.rating}) & ${p4.name} (${p4.rating})`);
      console.error('.............................................................');
      console.error(`Win probability for Team 1: ${t1prob} %`);
      console.error(`Win probability for Team 2: ${t2prob} %`);
      console.error(`${t1win ? 'TEAM 1' : 'TEAM 2'} WON ! (Luck of the draw for Team 1: ${t1winChance} VS ${t1prob} % chance for Team 1 to win)`);
      console.error('.............................................................');
    }

    return [
      { name: p1.name, rating: p1.rating + p1ratingTot, probability: t1prob, won: t1win },
      { name: p2.name, rating: p2.rating + p2ratingTot, probability: t1prob, won: t1win },
      { name: p3.name, rating: p3.rating + p3ratingTot, probability: t2prob, won: !t1win },
      { name: p4.name, rating: p4.rating + p4ratingTot, probability: t2prob, won: !t1win }
    ];
  }

  public calculateELO(rating1: number, rating2: number, winProbability: number, won: boolean): number {
    if (won) {
      return rating1 + this.pointPot * (1 - (winProbability / 100));
      // return rating1 + this.pointPot * (1 - this.calculateProbability(rating2, rating1));
    }
    return rating1 + this.pointPot * (0 - (winProbability / 100));
    // return rating1 + this.pointPot * (0 - this.calculateProbability(rating2, rating1));
  }

  private calculateProbability(ratingA: number, ratingB: number): number {
    return (
      (1.0 * 1.0) / (1 + 1.0 * Math.pow(10, (1.0 * (ratingA - ratingB)) / 400))
    );
  }
}
