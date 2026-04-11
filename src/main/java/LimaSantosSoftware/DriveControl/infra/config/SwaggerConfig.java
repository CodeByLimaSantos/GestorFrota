package LimaSantosSoftware.DriveControl.infra.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("DriveControl API")
                        .description("Sistema de gestão de aluguel de veículos\n\n" +
                                "### Funcionalidades:\n" +
                                "- Gerenciamento de usuários e autenticação\n" +
                                "- Cadastro e controle de veículos\n" +
                                "- Registro de motoristas\n" +
                                "- Gestão de aluguéis\n" +
                                "- Dashboard com estatísticas")
                        .version("1.0.0")
                        .contact(new Contact()
                                .name("Lima Santos Software")
                                .url("https://limasantossoftware.com")
                                .email("contact@limasantossoftware.com"))
                        .license(new License()
                                .name("MIT License")))
                .addSecurityItem(new SecurityRequirement().addList("Bearer Authentication"))
                .components(new io.swagger.v3.oas.models.Components()
                        .addSecuritySchemes("Bearer Authentication",
                                new SecurityScheme()
                                        .type(SecurityScheme.Type.HTTP)
                                        .scheme("bearer")
                                        .bearerFormat("JWT")
                                        .description("Enter JWT token")));
    }
}

