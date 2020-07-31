---
inject: true
to: ios/<%= ios_project_name %>/AppDelegate.m
after: application didFinishLaunchingWithOptions:\(NSDictionary \*\)launchOptions\n.*{
skip_if: \[FIRApp configure\]
---
	[FIRApp configure];