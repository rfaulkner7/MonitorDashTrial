package hiscox.adapted;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

//contains @Configuration, bootstrapped by spring and considered a source of other bean definitions
//
//contains @EnableAutoConfiguration, tells Spring to automatically configure your application based on the dependencies
//that you have added in the pom.xml file. For example, if spring-data-jpa or spring-jdbc is in the classpath
//then it automatically tries to configure a DataSource by reading the database properties from the application.properties
//file
//
//@ComponentScan it tells Spring to scan and bootstrap other components defined in the current package and all the sub-packages
@SpringBootApplication
@EnableSwagger2 // Awesome auto documentation at http://localhost:8080/swagger-ui.html
@EnableJpaAuditing //if we want Spring Data JPA to automatically populate our fields
public class AdaptedApplication {

    public static void main(String[] args) {
        SpringApplication.run(AdaptedApplication.class, args);
    }

    @Bean
    public Docket productApi() {
        return new Docket(DocumentationType.SWAGGER_2).select()
                .apis(RequestHandlerSelectors.basePackage("hiscox.adapted")).build();
    }

}