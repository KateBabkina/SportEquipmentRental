package ru.vsu.cs.sportbox.Controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.vsu.cs.sportbox.Data.Dto.InventoryFilterDto;
import ru.vsu.cs.sportbox.Data.Dto.PersonLoginDto;
import ru.vsu.cs.sportbox.Data.Model.Inventory;
import ru.vsu.cs.sportbox.Responses.LoginResponse;
import ru.vsu.cs.sportbox.Service.InventoryService;
import ru.vsu.cs.sportbox.Service.PersonService;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
@AllArgsConstructor
public class InventoryController {

    private InventoryService inventoryService;
    @GetMapping("/filter")
    public ResponseEntity<List<Inventory>> filterInventory(@RequestBody InventoryFilterDto inventoryFilterDto) {
        List<Inventory> inventories = inventoryService.filterInventory(inventoryFilterDto);

        return new ResponseEntity<>(inventories, HttpStatus.OK);
    }
}
