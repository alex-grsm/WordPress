<?php
/*
Template Name: Наша история
*/
?>

<?php
get_header();
?>

<div class="aboutus">
    <div class="container">
        <h1 class="title"><? the_title(); ?></h1>
        <div class="row">
            <div class="col-lg-6">
                <div class="subtitle">
                    <? the_field('history_subtitle_1'); ?>
                </div>
                <div class="aboutus__text">
                    <? the_field('history_text_1'); ?>
                </div>
            </div>
            <div class="col-lg-6">
                <img class="aboutus__img" src="<?= bloginfo('template_url'); ?>/assets/img/about_1.jpg" alt="мир детства">
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6">
                <img class="aboutus__img" src="<?= bloginfo('template_url'); ?>/assets/img/about_2.jpg" alt="мир детства">
            </div>
            <div class="col-lg-6">
                <div class="subtitle">
                    <? the_field('history_subtitle_2'); ?>
                </div>
                <div class="aboutus__text">
                    <? the_field('history_text_2'); ?>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6">
                <div class="subtitle">
                    <? the_field('history_subtitle_3'); ?>
                </div>
                <div class="aboutus__text">
                    <? the_field('history_text_3'); ?>
                </div>
            </div>
            <div class="col-lg-6">
                <img class="aboutus__img" src="<?= bloginfo('template_url'); ?>/assets/img/about_3.jpg" alt="мир детства">
            </div>
        </div>
    </div>
</div>

<?php
get_footer();
?>