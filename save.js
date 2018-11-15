      
    });
    Applicant.associate = function(models) {
       Applicant.hasMany(models.Message);
   };
    return Applicant;
}; 


