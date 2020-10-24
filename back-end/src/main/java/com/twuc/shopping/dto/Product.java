package com.twuc.shopping.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    private String id;

    private String productName;

    private BigDecimal price;

    private String unit;

    private String url;
}
