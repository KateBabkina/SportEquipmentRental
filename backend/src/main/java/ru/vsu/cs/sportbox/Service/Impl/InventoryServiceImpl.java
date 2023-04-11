package ru.vsu.cs.sportbox.Service.Impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.vsu.cs.sportbox.Data.Dto.InventoryFilterDto;
import ru.vsu.cs.sportbox.Data.Model.Inventory;
import ru.vsu.cs.sportbox.Data.Repository.InventoryRepository;
import ru.vsu.cs.sportbox.Data.Repository.InventoryTypeRepository;
import ru.vsu.cs.sportbox.Service.InventoryService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class InventoryServiceImpl implements InventoryService {
    private InventoryRepository inventoryRepository;
    private InventoryTypeRepository inventoryTypeRepository;

    @Override
    @Transactional
    public List<Inventory> filterInventory(InventoryFilterDto inventoryFilterDto) {
        if (inventoryFilterDto.getInventoryType() != null && inventoryFilterDto.getId() != 0) {
            ArrayList<Inventory> result = new ArrayList<>();
            inventoryRepository.findByIdAndInventoryType(inventoryFilterDto.getId(), inventoryTypeRepository.findByType(inventoryFilterDto.getInventoryType())).ifPresent(result::add);
            return result;
        } else if (inventoryFilterDto.getInventoryType() != null) {
            return inventoryRepository.findByInventoryType(inventoryTypeRepository.findByType(inventoryFilterDto.getInventoryType()));
        } else if (inventoryFilterDto.getId() != 0) {
            ArrayList<Inventory> result = new ArrayList<>();
            inventoryRepository.findById(inventoryFilterDto.getId()).ifPresent(result::add);
            return result;
        }
        return inventoryRepository.findAll();
    }
}
