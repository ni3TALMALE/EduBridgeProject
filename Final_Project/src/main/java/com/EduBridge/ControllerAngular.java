package com.EduBridge;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ControllerAngular {
	
@Autowired
 ServiceAngular sa;

@GetMapping("view")
public List<ModelAngular> getAllRecords(){
	return this.sa.getAllUserData();
			
}
@GetMapping("getid")
public ModelAngular getLatestID() {
	List<ModelAngular> ls=this.sa.getAllUserData();
//	System.out.println(ls.get(ls.size()-1).getId()+1);
	return ls.get(ls.size()-1);
}


@PostMapping("insert")
public void registerData(@RequestBody ModelAngular p){
	this.sa.saveData(p);
}

@PostMapping("update")
public void modifyData(@RequestBody ModelAngular p1) {
	this.sa.updateData(p1);
}

@PostMapping("viewI")
public ModelAngular getData(@RequestBody ModelAngular id) {
int id1=id.getId();
return sa.getDataById(id1);
}
@PostMapping("delete")
public void deleteAccount(@RequestBody ModelAngular p1) {
	this.sa.removeAccount(p1);
	 
}
@PostMapping("valid") 
public ModelAngular login(@RequestBody ModelAngular lv) throws Exception 
{ return this.sa.loginuser(lv.getId(),lv.getPassword()); }      

@PostMapping("ticketinsert")
public void registerTicketData(@RequestBody ticketModal p){
	this.sa.saveTicketData(p);
}
@GetMapping("ticketview")
public List<ticketModal> getAllTicketRecords(){
	return this.sa.getAllTicketData();
			
}
@GetMapping("getticketid")
public ticketModal getLatestTicketID() {
	List<ticketModal> ls=this.sa.getAllTicketData();
//	System.out.println(ls.get(ls.size()-1).getId()+1);
	return ls.get(ls.size()-1);
}
@PostMapping("deleteticket")
public void deleteTicket(@RequestBody ticketModal p1) {
	this.sa.removeTicket(p1);
}
@PostMapping("updateTicket")
public void modifyTicketData(@RequestBody ticketModal p1) {
	this.sa.updateTicketData(p1);
}
@PostMapping("getRecordById")
public List<ticketModal> getRecordById(@RequestBody ticketModal id) {
	System.out.println("id "+id.getUserid());	
	return sa.getRecordById(id.getUserid());
}

@PostMapping("getRecordById1")
public Optional<ModelAngular> getRecordById1(@RequestBody ModelAngular id1) {
//	System.out.println("id "+id1.id);	
	return sa.getRecordById1(id1.id);
}
}
