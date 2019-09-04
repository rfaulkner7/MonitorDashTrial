package hiscox.adapted;

import hiscox.adapted.controller.AuditController;
import hiscox.adapted.model.Audit;
import hiscox.adapted.repository.AuditRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class AdaptedApplicationTests {

    @Mock
    AuditRepository repo;

    @InjectMocks
    AuditController controller;

    Audit one = new Audit("ok");
    Audit two = new Audit("dead");
    Audit three = new Audit("alive");
    Audit four = new Audit("Georgia");
    Audit five = new Audit("Hiscox");
    Audit[] arr = new Audit[]{one, two, three, four, five};
    List<Audit> list = Arrays.asList(one, two, three, four, five);

//    @Test
//    public void testGetAll() {
//        when(repo.findAll())
//                .thenReturn(list);
//        Assert.assertEquals(list, controller.getAllAudits());
//    }

    @Test
    public void testGetById() {
        Long a = 7L;
        when(repo.findById(a))
                .thenReturn(Optional.of(one));
        Assert.assertEquals(Optional.of(one), Optional.of(controller.getAuditById(a)));
    }




}
