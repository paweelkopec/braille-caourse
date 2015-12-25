package com.pawelk.brailleCourse.model;

import javax.persistence.Entity;

import java.io.Serializable;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;

import java.lang.Override;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import com.pawelk.brailleCourse.model.CourseCategory;
import javax.persistence.ManyToOne;

@Entity
@SuppressWarnings("serial")
@XmlRootElement
public class Course implements Serializable
{

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(name = "id", updatable = false, nullable = false)
   private Long id;

   @Column(nullable = false)
   @NotNull
   @Size(min = 1)
   private String name;

   @Column
   private String img;

   @ManyToOne
   private CourseCategory category;

   public Long getId()
   {
      return this.id;
   }

   public void setId(final Long id)
   {
      this.id = id;
   }

   @Override
   public boolean equals(Object obj)
   {
      if (this == obj)
      {
         return true;
      }
      if (!(obj instanceof Course))
      {
         return false;
      }
      Course other = (Course) obj;
      if (id != null)
      {
         if (!id.equals(other.id))
         {
            return false;
         }
      }
      return true;
   }

   @Override
   public int hashCode()
   {
      final int prime = 31;
      int result = 1;
      result = prime * result + ((id == null) ? 0 : id.hashCode());
      return result;
   }

   public String getName()
   {
      return name;
   }

   public void setName(String name)
   {
      this.name = name;
   }

   public String getImg()
   {
      return img;
   }

   public void setImg(String img)
   {
      this.img = img;
   }

   @Override
   public String toString()
   {
      String result = getClass().getSimpleName() + " ";
      if (name != null && !name.trim().isEmpty())
         result += "name: " + name;
      if (img != null && !img.trim().isEmpty())
         result += ", img: " + img;
      return result;
   }

   public CourseCategory getCategory()
   {
      return this.category;
   }

   public void setCategory(final CourseCategory category)
   {
      this.category = category;
   }
}