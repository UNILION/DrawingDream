package com.dd.db.entity.schoollife;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.dd.db.entity.user.User;
import com.dd.db.enums.Code;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Score {

	@Enumerated(EnumType.STRING)
	private Code gradeCode;
	
	@Enumerated(EnumType.STRING)
	private Code testCode;

	@Enumerated(EnumType.STRING)
	private Code subjectCode;
	
	@Enumerated(EnumType.STRING)
	private Code semestertCode;
	
	private float score;
	
	@Column(name="del_yn", columnDefinition="BOOLEAN DEFAULT false")
	private boolean delYn;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;
}
