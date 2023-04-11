package ru.vsu.cs.sportbox.Data.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "inventory")
public class Inventory {
    @Id
    @Column(name = "id", unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "size")
    private Integer size;

    @ManyToOne (optional=false, cascade=CascadeType.ALL)
    @JoinColumn (name="inventory_type_id")
    @JsonIgnore
    private InventoryType inventoryType;

    @OneToMany(mappedBy = "inventory", fetch = FetchType.EAGER, orphanRemoval = true)
    private List<Booking> bookings;
}
