package ru.vsu.cs.sportbox.Specification;

import io.micrometer.common.util.StringUtils;
import jakarta.persistence.criteria.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.domain.Specification;
import ru.vsu.cs.sportbox.Data.Dto.InventoryTypeFilterDto;
import ru.vsu.cs.sportbox.Data.Model.Booking;
import ru.vsu.cs.sportbox.Data.Model.Inventory;
import ru.vsu.cs.sportbox.Data.Model.InventoryType;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
public class InventoryTypeSpecification {

    public static Specification<InventoryType> getEmployeesByPhoneTypeSpec(InventoryTypeFilterDto inventoryTypeFilterDto) {
        return new Specification<InventoryType>() {
            @Override
            public Predicate toPredicate(Root<InventoryType> root,
                                         CriteriaQuery<?> query,
                                         CriteriaBuilder criteriaBuilder) {

                List<Predicate> predicates = new ArrayList<>();
                String inventoryType = inventoryTypeFilterDto.getInventoryType();
                int minPrice = inventoryTypeFilterDto.getMinPrice();
                int maxPrice = inventoryTypeFilterDto.getMaxPrice();
                String startDate = inventoryTypeFilterDto.getStartDate();
                String endDate = inventoryTypeFilterDto.getEndDate();

                if (StringUtils.isNotBlank(inventoryType))
                {
                    predicates.add(criteriaBuilder.equal(root.get("type"), inventoryType));
                    predicates.add(criteriaBuilder.isNotEmpty(root.get("inventories")));
                }
                if (minPrice != 0)
                {
                    predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("price"), minPrice));
                }
                if (maxPrice != 0)
                {
                    predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("price"), maxPrice));
                }
//                if (StringUtils.isNotBlank(startDate) && StringUtils.isNotBlank(endDate))
//                {
//                    Date sDate;
//                    Date eDate;
//                    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
//                    try {
//                        sDate = format.parse(startDate);
//                        eDate = format.parse(endDate);
//                    } catch (ParseException e) {
//                        throw new RuntimeException(e);
//                    }
//
//                    Join<InventoryType, Inventory> inventoryJoin = root.join("inventories");
//                    Join<Join<InventoryType, Inventory>, Booking> bookingJoin = inventoryJoin.join("bookings", JoinType.LEFT);
//
//                    predicates.add(criteriaBuilder.or(
//                            criteriaBuilder.or(
//
//                            criteriaBuilder.and(
//                            criteriaBuilder.lessThan(bookingJoin.<Date>get("startDate"), sDate),
//                                    criteriaBuilder.lessThan(bookingJoin.<Date>get("endDate"), eDate)),
//
//                            criteriaBuilder.and(
//                            criteriaBuilder.greaterThan(bookingJoin.<Date>get("startDate"), sDate),
//                                    criteriaBuilder.greaterThan(bookingJoin.<Date>get("endDate"), eDate))),
//                            criteriaBuilder.isEmpty(inventoryJoin.get("bookings"))));
//
//                }

                return predicates.size() <= 0 ? null : criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
            }
        };
    }
}
