---
inject: true
to: ios/<%= ios_project_name %>/AppDelegate.m
after: \#import <React/RCTRootView.h>
skip_if: \#import <Firebase.h>
---
#import <Firebase.h>