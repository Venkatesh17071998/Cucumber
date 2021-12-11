package com.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.report.Reporting;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "Features",glue= {"org.stepdefinition"},monochrome=true,plugin= {"pretty","json:src/test/resources/Reports/output.json"},dryRun=false,snippets=SnippetType.CAMELCASE)
public class TestRunnerClass {
	@AfterClass
	public static void afterclass() {
		String path = System.getProperty("user.dir");
		System.out.println(path);
		Reporting.generateJVMreport(path+"\\src\\test\\resources\\Reports\\output.json");
	}
	
	
	

}

