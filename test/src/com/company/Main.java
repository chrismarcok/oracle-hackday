package com.company;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


import java.util.concurrent.TimeUnit;

public class Main {
    public static void waiting(int i){
        try{
            TimeUnit.SECONDS.sleep(i);
        } catch (InterruptedException ex){
            ;
        }
    }
    public static void scroll(JavascriptExecutor js){
        for(int i=0;i<100;i++){
            js.executeScript("window.scrollBy(0,5)");
        }
    }
    public static void main(String[] args) {
	// write your code here
        String projectLocation = System.getProperty("user.dir");
        System.setProperty("webdriver.chrome.driver", projectLocation + "/drivers/chromedriver");

        WebDriver driver = new ChromeDriver();
        JavascriptExecutor js = (JavascriptExecutor) driver;

        driver.get("localhost:3000");

        System.out.println("Testing search");
        WebElement search = driver.findElement(By.id("search"));
        search.sendKeys("this");
        search.sendKeys(" is a test title");
        search.sendKeys(" 328");
        waiting(1);
        search.clear();
        driver.get("localhost:3000/post/5ecff8a80be3a1472f897e43");

        scroll(js);
        waiting(1);

        System.out.println("Testing create post");
        driver.get("localhost:3000/createpost");
        waiting(1);
        WebElement title = driver.findElement(By.id("input_title"));
        WebElement body = driver.findElement(By.id("input_body"));
        WebElement tag = driver.findElement(By.id("input_tag"));
        WebElement submit = driver.findElement(By.className("submit_btn"));
        title.sendKeys("Auto Testing title 1");
        body.sendKeys("What's Java? What's Selenium? Anybody help me out...");
        tag.sendKeys("AMS");
        submit.click();
        waiting(1);

        driver.get("localhost:3000");
        search = driver.findElement(By.id("search"));
        search.sendKeys("Auto Testing title 1");
        waiting(1);
        search.clear();



        driver.findElement(By.xpath("//a[text()='adam_zartin']")).click();


        waiting(3);
        driver.quit();
    }
}
