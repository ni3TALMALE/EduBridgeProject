package com.EduBridge;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class ServiceAngular {
	@Autowired
	RepositoryAngular re;
	@Autowired
	ticketRepository tr;
	public List getAllUserData() {
		return re.findAll();
	}
	
	
	public void saveData(ModelAngular p) {
	re.save(p);
	}
	
	public void updateData(ModelAngular p1) {
		re.save(p1);
	}
	public Optional<ModelAngular> getRecordById1(int id) {
		Optional<ModelAngular> pm = re.findById(id);
		return pm;
	}
	public ModelAngular getDataById(int id) {
		Optional<ModelAngular> pm=re.findById(id);
		if(pm.isPresent()) {
			
			return pm.get() ;
	            
		}else 
		return null;
	}
	public void removeAccount(ModelAngular p1) {
		int id= p1.getId();
		ModelAngular q=re.getById(id);
		re.delete(q);
	}
	
	public ModelAngular loginuser(int id, String password) throws Exception { 

		ModelAngular l1 = re.getById(id); 
		System.out.println(l1.getPassword()); 
		if(l1.getPassword().equals(password)) { 
			return l1; 
			} else { 
				throw new Exception("Invalid Credentials"); 
				} 
		}
	public void saveTicketData(ticketModal p) {
		tr.save(p);
		}
	public List getAllTicketData() {
		return tr.findAll();
	}
	public void removeTicket(ticketModal p1) {
		int id= p1.getId();
		ticketModal q=tr.getById(id);
		tr.delete(q);
	}
	public void updateTicketData(ticketModal p1) {
		tr.save(p1);
	}
	public List<ticketModal> getRecordById(int id) {
		List<ticketModal> pm = tr.findByUserid(id);
		return pm;	
	}
	
	
	
}
