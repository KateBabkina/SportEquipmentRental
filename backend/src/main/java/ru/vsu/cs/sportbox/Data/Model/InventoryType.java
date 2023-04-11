package ru.vsu.cs.sportbox.Data.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "inventory_type")
public class InventoryType {

    @Id
    @Column(name = "id", unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "type", unique = true)
    private String type;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private Double price;

    @Column(name = "is_sizable")
    private Boolean isSizable;

    @OneToMany (mappedBy="inventoryType", fetch=FetchType.EAGER, orphanRemoval = true)
    private List<Inventory> inventories;
}
