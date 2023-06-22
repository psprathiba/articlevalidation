package stepDefinitions;

import cucumber.api.java.*;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.*;
import org.testng.Assert;

import java.util.*;

public class NewsValidationSteps {
    private String firstArticleTitle;
    private static WebDriver driver;

    @Before
    public void setUpClass(){
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }
    @Given("I am on the Guardian news website")
    public void navigateToGuardianWebsite() throws InterruptedException {
        driver.get("https://www.theguardian.com/tone/news");
        Thread.sleep(2000);
        driver.switchTo().frame(driver.findElement(By.id("sp_message_iframe_801669")));
        driver.findElement(By.xpath("//div[@class=\"message-component message-row\"]/button[text()=\"Yes, I’m happy\"]")).click();
    }

    @When("Read the first news article")
    public void readFirstNewsArticle() throws InterruptedException {
        WebElement firstArticleElement = driver.findElement(By.xpath("//div[@class='fc-item__container']//a//span[@class=\"u-faux-block-link__cta fc-item__headline\"]/span"));
        firstArticleTitle = firstArticleElement.getText().trim();
        System.out.println("text= "+firstArticleTitle.trim());
    }

    @Then("Reverse the article name")
    public void readFirstNewsArticleInReverse() throws InterruptedException {
        WebElement firstArticleElement = driver.findElement(By.xpath("//div[@class='fc-item__container']//a//span[@class=\"u-faux-block-link__cta fc-item__headline\"]/span"));
        firstArticleTitle = firstArticleElement.getText();
        StringBuilder str = new StringBuilder(firstArticleTitle);
        firstArticleTitle= String.valueOf(str.reverse());
        System.out.println("text= "+firstArticleTitle.trim());
    }

    @Then("Search for similar information on Google")
    public void searchSimilarInformationOnGoogle() {
        ((JavascriptExecutor)driver).executeScript("window.open()");
        ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(tabs.get(1));
        driver.get("https://www.google.com");
        WebElement searchBox = driver.findElement(By.name("q"));
        searchBox.sendKeys(firstArticleTitle);
        searchBox.submit();
    }

    @Then("Validate the news article's valid")
    public void validateNewsArticleValidity() throws InterruptedException {
        Thread.sleep(3000);
        List<WebElement> searchResults = driver.findElements(By.xpath("//div[@class='g']//h3"));
        int numberOfResults = searchResults.size();

        Assert.assertTrue(numberOfResults >= 2, "The news article is considered valid");
    }

    @Then("Validate invalid news article")
    public void validateNewsArticleIsInvalid() {
        List<WebElement> searchResults = driver.findElements(By.xpath("//div[@class='g']//h3"));
        int numberOfResults = searchResults.size();

        Assert.assertFalse(numberOfResults >= 2, "The news article is considered invalid");
    }

    @After
    public void teardown() {
        driver.quit();
    }

}

