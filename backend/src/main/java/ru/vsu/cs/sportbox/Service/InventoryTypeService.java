package ru.vsu.cs.sportbox.Service;

import ru.vsu.cs.sportbox.Data.Dto.InventoryTypeFilterDto;
import ru.vsu.cs.sportbox.Data.Model.InventoryType;

import java.util.List;

public interface InventoryTypeService {
    List<InventoryType> filterInventoryType(InventoryTypeFilterDto inventoryTypeFilterDto);

    List<InventoryType> getAllInventoryTypes();
}
