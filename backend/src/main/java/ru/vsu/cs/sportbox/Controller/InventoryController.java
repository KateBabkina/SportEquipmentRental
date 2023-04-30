package ru.vsu.cs.sportbox.Controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.vsu.cs.sportbox.Data.Dto.*;
import ru.vsu.cs.sportbox.Data.Model.Inventory;
import ru.vsu.cs.sportbox.Responses.*;
import ru.vsu.cs.sportbox.Service.InventoryService;
import ru.vsu.cs.sportbox.Service.PersonService;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class InventoryController {

    private InventoryService inventoryService;

    @GetMapping("/filter")
    public ResponseEntity<List<Inventory>> filterInventory(@RequestBody InventoryFilterDto inventoryFilterDto) {
        HttpStatus httpStatus = HttpStatus.OK;
        List<Inventory> inventories = inventoryService.filterInventory(inventoryFilterDto);
        return new ResponseEntity<>(inventories, httpStatus);
    }

    @PostMapping("/add")
    public ResponseEntity<InventoryResponse> addNewInventory(@RequestBody InventoryCreateDto inventoryCreateDto) {
        HttpStatus httpStatus = HttpStatus.OK;
        InventoryResponse inventoryCreateResponse = inventoryService.addNewInventory(inventoryCreateDto);
        return new ResponseEntity<>(inventoryCreateResponse, httpStatus);
    }

    @GetMapping("/get_by_id")
    public ResponseEntity<InventoryResponse> getInventoryById(@RequestParam(value="id") int id) {
        HttpStatus httpStatus = HttpStatus.OK;
        InventoryResponse inventoryGetResponse = inventoryService.getInventoryById(id);
        return new ResponseEntity<>(inventoryGetResponse, httpStatus);
    }

    @PutMapping("/change")
    public ResponseEntity<InventoryResponse> changeInventory(@RequestParam(value="id") int id, @RequestBody InventoryChangeDto inventoryChangeDto) {
        HttpStatus httpStatus = HttpStatus.OK;
        InventoryResponse inventoryChangeResponse = inventoryService.changeInventory(id, inventoryChangeDto);
        return new ResponseEntity<>(inventoryChangeResponse, httpStatus);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<InventoryResponse> deleteInventoryById(@RequestParam(value="id") int id) {
        HttpStatus httpStatus = HttpStatus.OK;
        InventoryResponse inventoryDeleteResponse = inventoryService.deleteInventoryById(id);
        return new ResponseEntity<>(inventoryDeleteResponse, httpStatus);
    }
}
