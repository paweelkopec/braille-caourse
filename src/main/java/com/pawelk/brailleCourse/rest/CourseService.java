package com.pawelk.brailleCourse.rest;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.core.Response.Status;


import com.pawelk.brailleCourse.model.Course;



/**
 * <p>
 *     This is a stateless service, we declare it as an EJB for transaction demarcation
 * </p>
 */
@Stateless
@Path("/course")
public class CourseService extends BaseEntityService<Course> {

    public CourseService() {
        super(Course.class);
        
    }
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Course> getAll(@Context UriInfo uriInfo) {
   	
        return getAll(uriInfo.getQueryParameters());
    }
  
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/category/{id:[0-9][0-9]*}")
    public List<Course> findByCategoryId(@PathParam("id") Long id)
    {
    	
        final CriteriaBuilder criteriaBuilder = this.entityManager.getCriteriaBuilder();
        final CriteriaQuery<Course> criteriaQuery = criteriaBuilder.createQuery(Course.class);
        Root<Course> root = criteriaQuery.from(Course.class);
        Predicate condition = criteriaBuilder.equal(root.get("category"), id);
        criteriaQuery.select(criteriaBuilder.createQuery(Course.class).getSelection()).where(condition);
        return this.entityManager.createQuery(criteriaQuery).getResultList();
       

    }

}