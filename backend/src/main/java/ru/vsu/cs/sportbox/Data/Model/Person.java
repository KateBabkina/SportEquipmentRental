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
@Table(name = "person")
public class Person {

    @Id
    @Column(name = "id", unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "password")
    private String password;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "is_baned")
    private Boolean isBaned = false;

    @ManyToOne (optional=false, cascade=CascadeType.ALL)
    @JoinColumn (name="role_id")
    @JsonIgnore
    private Role role;

    @OneToMany(mappedBy = "person", fetch = FetchType.EAGER, orphanRemoval = true)
    private List<Booking> bookings;
}
