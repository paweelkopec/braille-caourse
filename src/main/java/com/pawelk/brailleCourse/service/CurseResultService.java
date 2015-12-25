package com.pawelk.brailleCourse.service;

import javax.ejb.SessionBean;
import javax.inject.Inject;
import javax.persistence.EntityManager;
//import org.hibernate.Session;

public class CurseResultService {

	private int correct;
	private int incorrect;

	@Inject
    private EntityManager entityManager;
	
	
	public CurseResultService() {
		super();
		
	}
	
	public int getCorrect() {
		return correct;
	}

	public void setCorrect(int correct) {
		this.correct = correct;
	}

	public int getIncorrect() {
		return incorrect;
	}

	public void setIncorrect(int incorrect) {
		this.incorrect = incorrect;
	}

	@Override
	public String toString() {
		return "CurseResultService [correct=" + correct + ", incorrect=" + incorrect + "]";
	}


	public void reset() {
		this.correct = 0;
		this.incorrect = 0;
		entityManager.persist(this);
		entityManager.remove(this);
		// CurseResultService cat = entityManager.find( CurseResultService.class, 1);
		//Session session = entityManager.unwrap( Session.class );
	}

}
