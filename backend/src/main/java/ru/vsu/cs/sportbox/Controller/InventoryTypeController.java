package ru.vsu.cs.sportbox.Controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.vsu.cs.sportbox.Data.Dto.InventoryFilterDto;
import ru.vsu.cs.sportbox.Data.Dto.InventoryTypeFilterDto;
import ru.vsu.cs.sportbox.Data.Model.Inventory;
import ru.vsu.cs.sportbox.Data.Model.InventoryType;
import ru.vsu.cs.sportbox.Service.InventoryService;
import ru.vsu.cs.sportbox.Service.InventoryTypeService;

import java.util.List;

@RestController
@RequestMapping("/api/inventory_type")
@AllArgsConstructor
public class InventoryTypeController {
    private InventoryTypeService inventoryTypeService;
    @GetMapping("/filter")
    public ResponseEntity<List<InventoryType>> filterInventoryType(@RequestBody InventoryTypeFilterDto inventoryTypeFilterDto) {
        List<InventoryType> inventoryTypes = inventoryTypeService.filterInventoryType(inventoryTypeFilterDto);

        return new ResponseEntity<>(inventoryTypes, HttpStatus.OK);
    }

    @GetMapping("/get_all")
    public ResponseEntity<List<InventoryType>> getAllInventoryTypes() {
        List<InventoryType> inventoryTypes = inventoryTypeService.getAllInventoryTypes();

        return new ResponseEntity<>(inventoryTypes, HttpStatus.OK);
    }
}
