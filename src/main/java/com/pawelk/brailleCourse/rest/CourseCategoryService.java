package com.pawelk.brailleCourse.rest;

import javax.ejb.Stateless;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.Path;

import com.pawelk.brailleCourse.model.CourseCategory;

/**
 * <p>
 *     A JAX-RS endpoint for handling {@link CourseCategory}s. Inherits the actual
 *     methods from {@link BaseEntityService}.
 * </p>
 *
 * @author Marius Bogoevici
 */
@Path("/categories")
/**
 * <p>
 *     This is a stateless service, we declare it as an EJB for transaction demarcation
 * </p>
 */
@Stateless
public class CourseCategoryService extends BaseEntityService<CourseCategory> {

    public CourseCategoryService() {
        super(CourseCategory.class);
    }

}