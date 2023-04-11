package ru.vsu.cs.sportbox.Service;

import ru.vsu.cs.sportbox.Data.Dto.InventoryFilterDto;
import ru.vsu.cs.sportbox.Data.Model.Inventory;

import java.util.List;
import java.util.Optional;

public interface InventoryService {

    List<Inventory> filterInventory(InventoryFilterDto inventoryFilterDto);
}
