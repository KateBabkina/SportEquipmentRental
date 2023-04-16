package ru.vsu.cs.sportbox.Service;

import ru.vsu.cs.sportbox.Data.Dto.InventoryChangeDto;
import ru.vsu.cs.sportbox.Data.Dto.InventoryCreateDto;
import ru.vsu.cs.sportbox.Data.Dto.InventoryFilterDto;
import ru.vsu.cs.sportbox.Data.Model.Inventory;
import ru.vsu.cs.sportbox.Responses.InventoryChangeResponse;
import ru.vsu.cs.sportbox.Responses.InventoryCreateResponse;
import ru.vsu.cs.sportbox.Responses.InventoryDeleteResponse;
import ru.vsu.cs.sportbox.Responses.InventoryGetResponse;

import java.util.List;
import java.util.Optional;

public interface InventoryService {

    List<Inventory> filterInventory(InventoryFilterDto inventoryFilterDto);
    InventoryCreateResponse addNewInventory(InventoryCreateDto inventoryCreateDto);
    InventoryGetResponse getInventoryById(int id);
    InventoryDeleteResponse deleteInventoryById(int id);
    InventoryChangeResponse changeInventory(int id, InventoryChangeDto inventoryChangeDto);
}
