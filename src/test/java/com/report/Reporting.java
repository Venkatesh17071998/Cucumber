package com.report;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class Reporting {
	public static void generateJVMreport(String json) {
		// location of the jvm report where you want to store
		String path = System.getProperty("user.dir");
		File Reportdirectory =new File(path+"src/test/resources/Reports");
		// create object for config class
		Configuration configuration = new Configuration(Reportdirectory, "adactin automation");
		//key ,value ---print ,reg,smoke,browser
		configuration.addClassifications("browser", "chrome");
		configuration.addClassifications("browser version", "95");
		configuration.addClassifications("os", "chrome");
		configuration.addClassifications("browser", "chrome");
		//add the json file into list
		ArrayList<String> json1 =new ArrayList<String>();
		json1.add(json);
		//pass the json file ----fetch the result from json file ----like howmany scenario pass/fail/skip
		ReportBuilder rb= new ReportBuilder(json1,configuration);
		//gnrate all jvm report ---contains all busineess logic
		rb.generateReports();
		
		
		
		

	}

}
