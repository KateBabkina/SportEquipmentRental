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
public class InventoryController {

    private InventoryService inventoryService;

    @GetMapping("/filter")
    public ResponseEntity<List<Inventory>> filterInventory(@RequestBody InventoryFilterDto inventoryFilterDto) {
        List<Inventory> inventories = inventoryService.filterInventory(inventoryFilterDto);

        return new ResponseEntity<>(inventories, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<InventoryResponse> addNewInventory(@RequestBody InventoryCreateDto inventoryCreateDto) {
        HttpStatus httpStatus;
        InventoryResponse inventoryCreateResponse = inventoryService.addNewInventory(inventoryCreateDto);
        if (inventoryCreateResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(inventoryCreateResponse, httpStatus);
    }

    @GetMapping("/get_by_id")
    public ResponseEntity<InventoryResponse> getInventoryById(@RequestParam(value="id") int id) {
        HttpStatus httpStatus;
        InventoryResponse inventoryGetResponse = inventoryService.getInventoryById(id);
        if (inventoryGetResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(inventoryGetResponse, httpStatus);
    }

    @PutMapping("/change")
    public ResponseEntity<InventoryResponse> changeInventory(@RequestParam(value="id") int id, @RequestBody InventoryChangeDto inventoryChangeDto) {
        HttpStatus httpStatus;
        InventoryResponse inventoryChangeResponse = inventoryService.changeInventory(id, inventoryChangeDto);
        if (inventoryChangeResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(inventoryChangeResponse, httpStatus);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<InventoryResponse> deleteInventoryById(@RequestParam(value="id") int id) {
        HttpStatus httpStatus;
        InventoryResponse inventoryDeleteResponse = inventoryService.deleteInventoryById(id);
        if (inventoryDeleteResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(inventoryDeleteResponse, httpStatus);
    }
}
