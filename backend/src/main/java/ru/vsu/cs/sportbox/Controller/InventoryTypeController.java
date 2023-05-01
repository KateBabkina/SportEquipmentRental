package ru.vsu.cs.sportbox.Controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class InventoryTypeController {
    private InventoryTypeService inventoryTypeService;
    @GetMapping("/filter")
    public ResponseEntity<List<InventoryType>> filterInventoryType(@RequestBody InventoryTypeFilterDto inventoryTypeFilterDto) {
        HttpStatus httpStatus = HttpStatus.OK;
        List<InventoryType> inventoryTypes = inventoryTypeService.filterInventoryType(inventoryTypeFilterDto);
        return new ResponseEntity<>(inventoryTypes, httpStatus);
    }

    @GetMapping("/get_all")
    public ResponseEntity<List<InventoryType>> getAllInventoryTypes() {
        HttpStatus httpStatus = HttpStatus.OK;
        List<InventoryType> inventoryTypes = inventoryTypeService.getAllInventoryTypes();
        return new ResponseEntity<>(inventoryTypes, httpStatus);
    }
}
