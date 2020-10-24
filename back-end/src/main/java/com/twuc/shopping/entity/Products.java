package com.twuc.shopping.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "product_list", uniqueConstraints = @UniqueConstraint(columnNames = "product_name"))
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private int id;

    @NotNull
    @Column(name = "product_name")
    private String productName;

    @NotNull
    @DecimalMin("0.00")
    private BigDecimal price;

    @NotNull
    private String unit;

    @NotNull
    private String url;
}
